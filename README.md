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

## Adding an Expedition

1. __Obtain the following from Science Team:__

  1. Related Panoptes workflow ID and name from production project #1558
  2. Expedition "snippet", aka rollover text
  3. Image (reduce size, rename, as needed)
  4. Info icon link

2. __Update `notes-from-nature-landing` GitHub repo__

  1. Create new branch
  2. Add items from Step #1 to `src/constants/expeditions.js` (see other expeditions in file for reference)
  3. Add image to `src/images/expeditions/`

3. __Test locally__

  1. Create workflow in preview project #1613 (Notes from Nature on Staging) with same workflow name as step 1.i.
  2. Activate (if not already) just created preview test workflow via Project Builder, Visibility section
  3. Check for expedition on localhost
  4. Test expedition Info icon link

4. __Deploy to production__  
Note: recommend deploying to production from new branch, if problem can redeploy quickly from master, can add and merge new branch after successful deploy.

  1. From Terminal run `npm run deploy-production`
  2. Wait, deploy may take up to 15 minutes.

5. __Edit related workflow `image-layout` via API__  
Note: Replace 1234 with expedition workflow ID.

  1. workflowVariable = zooAPI.type('workflows').get('1234')
  2. workflowVariable.update({'configuration.image_layout':['no-max-height']})
  3. workflowVariable.save()

6. __Once deploy complete, activate workflow, push branch up to GitHub__
  1. Let Science Team member know they're clear to activate workflow, or activate yourself via Project Builder, Visibility section
  2. If you activate, or after Science Team member has, confirm expedition properly shows on notesfromnature.org
  3. Push new expedition branch up to GitHub
  4. Create Pull Request, Merge, delete Branch
  5. Pull latest master down locally, (optionally) delete now merged expedition branch locally

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
