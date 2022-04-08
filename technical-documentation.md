
The goal was to build a single page application (SPA) hosted on the AWS platform that provides football statistics, allowing a comparison between any two teams. 

I chose to use the Sails[^1] framework for the backbone of this project, it's tightly integrated with Vue[^2] which is my preferred frontend. For the interface I always come back to Tailwind[^3] as it gives me the ability to create a consistent and easy to use design system in my projects.

In order to get a list of all teams statistics in the 2020-2021 English Premier League using the RapidAPI’s API-Football requires three parameters; `season year`, `league ID` and the `team ID`. Since both the `season year` and `league ID` were provided i only need to build two API function. 
  1) Get a list of the teams using `season year`, `league ID`.
  2) Get the statistics for each team using `season year`, `league ID` and the `team ID`.

Each API function stores the data in a Mongo[^4] database and linked with a One-to-Many relationship between the team and its statistics for the year, this can be extended to include or link any other data.

AWS CodePipeline was used to deploy the codebase to AWS Cloud Elastic Beanstalk[^5] service.
Local -> GitHub -> CodePipeline -> Elastic Beanstalk



[^1]: [Sails.js](https://sailsjs.com)
Sails is a comprehensive MVC-style framework for Node.js specifically designed for rapid development of server-side applications in JavaScript. It’s robust service-oriented architecture provides different types of components you can use to neatly organize code and separate responsibilities

[^2]: [Vue.js](https://vuejs.org)
Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces

[^3]: [Tailwind](https://tailwindcss.com/blog/tailwindcss-v3)
Tailwind is a “utility-first” CSS framework that can be composed to build any design, directly in your markup. In simple terms, Tailwind provides a variety of CSS classes that can assist you in creating custom designs. It lets you build completely custom designs without ever leaving your HTML


[^4]: [MongoDB](https://www.mongodb.com/what-is-mongodb)
MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time


[^5]: [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)
 Elastic Beanstalk is a platform within AWS that is used for deploying and scaling web applications. In simple terms this platform as a service (PaaS) takes your application code and deploys it while provisioning the supporting architecture and compute resources required for your code to run.