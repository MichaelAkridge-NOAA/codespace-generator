# Codespace(DevContainer) Generator

This project automates the setup of GitHub Codespaces by dynamically generating development container configurations (devcontainer.json) for each Docker container listed in a GitHub organization's package registry. 
- The goal is to streamline the creation of tailored development environments, and allow developers to start coding with pre-configured, containerized setups.

## Contact:
- Michael.Akridge@noaa.gov 

## Usage
Deploy workflows in github repository where you need to set up Codespaces dynamically based on container images of a particular organization.

## Github Actions
1. 01-list-packages.yml - Lists all the available container packages from a specific github organization (nmfs-opensci) and saves to "packages.json" file 
2. 02-gen-dev-cons.yml  - Generates devcontainer files based on github package container registry list. Runs the "generate-devcontainers.js" file

## Github Aciton Setup
1. Setup Actions on Repo
  - Under Settings > Actions > General > Workflow Permissions > Enable Read and Write Permissions
2. Setup API Key 
  - https://github.com/settings/tokens
  - generate a key that has at least "read:packages" permissions
3. Add key to Repo
  - Under Repo, settings > secrets > actions > add key from step 2
  - Name it as 'GIT_API_TOKEN', or Update list-packages action env variable key name

## Note
- Current setup is basic example and modification of the "generate-devcontainers.js" file is needed for projects specified devcontianer needs

----------
#### Disclaimer
This repository is a scientific product and is not official communication of the National Oceanic and Atmospheric Administration, or the United States Department of Commerce. All NOAA GitHub project content is provided on an â€˜as isâ€™ basis and the user assumes responsibility for its use. Any claims against the Department of Commerce or Department of Commerce bureaus stemming from the use of this GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States Government.

##### License
See the [LICENSE.md](./LICENSE.md) for details
