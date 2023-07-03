<?php declare(strict_types=1);

namespace DockwareSamplePlugin\Subscriber\Storefront;

use Shopware\Core\Framework\DataAbstractionLayer\Event\EntityLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Shopware\Core\Content\Product\ProductEvents;
use Shopware\Core\System\SystemConfig\SystemConfigService;

class Subscriber implements EventSubscriberInterface
{
    private SystemConfigService $systemConfigService;

    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ProductEvents::PRODUCT_LOADED_EVENT => 'onProductsLoaded'
        ];
    }

    public function onProductsLoaded(EntityLoadedEvent $event): void
    {
        $textField = $this->systemConfigService->get('DockwareSamplePlugin.config.textField', null);
        $colorPicker = $this->systemConfigService->get('DockwareSamplePlugin.config.colorPicker', null);
    }
}
