'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the transcendent ' + chalk.red('generator-yeoman-qload') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'controllerName1',
      message: 'Name of Controller'
    }];

   
    //this.log(json);
   


    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

     var json = require('./data.json');


    this.fs.copyTpl(
      this.templatePath('webapiController.cs'),
      this.destinationPath('../GeneratdWebApi/' + this.props.controllerName + 'Controller.cs'),
       {
          DtoName: this.props.featureName + 'Dto',
          ClassName: this.props.featureName,
          controllerName: this.props.controllerName,
          json: require('./data.json')
        }
    );
  }

  install() {
    this.installDependencies();
  }
};
