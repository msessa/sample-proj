const { AwsCdkTsLambdaRestApiApp } = require('@service-victoria/projen-templates');
const project = new AwsCdkTsLambdaRestApiApp({
  cdkVersion: '1.116.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@service-victoria/projen-templates'],
  name: 'sample-proj',

  // cdkDependencies: undefined,  /* (experimental) Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  // deps: [],                    /* Runtime dependencies of this module. */
  // description: undefined,      /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,      /* The "name" in package.json. */
  // release: undefined,          /* Add release management to this project. */
});
project.synth();