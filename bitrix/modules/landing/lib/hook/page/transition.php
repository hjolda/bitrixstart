<?php

namespace Bitrix\Landing\Hook\Page;

use Bitrix\Landing\Field;
use Bitrix\Landing\Hook;
use Bitrix\Landing\Landing;
use Bitrix\Landing\Manager;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Page\Asset;

/**
 * Typographic settings
 */
class Transition extends Hook\Page
{
	protected const BASE_COLOR = '#fff';

	/**
	 * Map of the field.
	 * @return array
	 */
	protected function getMap(): array
	{
		return [
			'COLOR' => new Field\Text('COLOR', [
				'title' => Loc::getMessage('LANDING_HOOK_TRANSITION_COLOR'),
			]),
		];
	}

	/**
	 * Enable or not the hook.
	 * @return boolean
	 */
	public function enabled(): bool
	{
		if ($this->issetCustomExec())
		{
			return true;
		}

		if ($this->isPage())
		{
			return false;
		}

		return true; //always enable on site to default value
	}

	/**
	 * Exec hook.
	 * @return void
	 */
	public function exec(): void
	{
		if ($this->execCustom())
		{
			return;
		}

		$type = strtoupper(Landing::getSiteType());
		if ($type === 'KNOWLEDGE')
		{
			return;
		}

		$color = \htmlspecialcharsbx(trim($this->fields['COLOR']->getValue()));
		if (!$color)
		{
			$color = self::BASE_COLOR;
		}
		$this->addTransitionClass();
		$this->setTransition($color);
	}

	protected function setTransition($color): void
	{
		Asset::getInstance()->addString(
			'<style>
					@keyframes page-transition {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0;
						}
					}
					body.landing-page-transition::after {
						opacity: 1;
						background: ' . $color . ';
						animation: page-transition 2s 1s forwards;
					}
				</style>'
		);
	}

	protected function addTransitionClass(): void
	{
		//add background on page load
		Manager::setPageView(
			'BodyClass',
			'landing-page-transition'
		);
	}
}