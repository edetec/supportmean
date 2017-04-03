'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('supportmeanApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
