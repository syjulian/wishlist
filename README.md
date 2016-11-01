# Frontend setup

## Setting up local dev environment
### Run all commands from windows command tool (cmd)
1. download and install latest nodejs and git
2. setup proxy for nodejs and bower

		npm config set proxy xxxxxxxxxxx
    
		npm config set https-proxy xxxxxxxxxxxxxx
    
	Add .bowerrc file to root dir
  
3. download and install grunt-cli and bower

		npm install -g grunt-cli
    
		npm install -g bower
    
4. go into project directory
5. run

		npm install
    
		bower install
    
		grunt serve

## Building app for deployment
1. In project root directory, run in cmd: grunt build
