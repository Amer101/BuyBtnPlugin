// Import all necessary Storefront plugins
import DockwareSamplePlugin from './DockwareSamplePlugin/DockwareSamplePlugin.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('DockwareSamplePlugin', DockwareSamplePlugin);