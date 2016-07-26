# Notes from Nature landing page

Landing page for [Notes from Nature](https://www.notesfromnature.org).

## Usage

__Install the dependencies:__

`npm install`

__Test:__

`npm run test`

__Development mode with livereload:__

`npm start`

__When you are done, create a production-ready version of the JS bundle:__

`npm run build`

__Deploy to production:__

`npm run deploy-production`

## Adding an Exhibition

1. __Obtain the following from Science Team:__

  1. Related Panoptes workflow name
  2. Expedition 'snippet'
  3. Image (reduce size if necessary)
  4. Info link

2. __Add items from Step #1 to `src/constants/expeditions.js`__
3. __Add image to `src/images/expeditions`__
4. __??? Test on preview (including info link icon)???__
5. __Deploy to production__
6. __Edit related workflow image-layout via API__
  1. workflowVariable = zooAPI...
  2. workflowVariable.update({...})
  3. workflowVariable.save()
7. __Once deploy complete, set related workflow to active__

## License

Copyright 2016 Zooniverse

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
