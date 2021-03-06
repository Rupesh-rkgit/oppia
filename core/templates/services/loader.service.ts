// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview A service to show loading screen.
 */

import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // TODO(#9154): Remove static when migration is complete.
  /**
   * The static keyword is used here because this service is used in both
   * angular and angularjs. Since we are using upgradedServices.ts, where a new
   * instance is created for angularjs and angular will creates a new instance
   * for the angular part, we end up having two instances of the service.
   * In order to keep the variables same, static is used until migration is
   * complete.
   */
  static loadingMessageSubject: Subject<string> = new Subject<string>();
  constructor() {}

  showLoadingScreen(message: string): void {
    // TODO(#9154): Change LoaderService to "this".
    LoaderService.loadingMessageSubject.next(message);
  }

  hideLoadingScreen(): void {
    // TODO(#9154): Change LoaderService to "this".
    LoaderService.loadingMessageSubject.next('');
  }

  getLoadingMessageSubject(): Subject<string> {
    // TODO(#9154): Change LoaderService to "this".
    return LoaderService.loadingMessageSubject;
  }
}

angular.module('oppia').factory(
  'LoaderService',
  downgradeInjectable(LoaderService));
