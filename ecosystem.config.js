module.exports = {
  apps : [{
    name: "FoodExplorer",
    script: './src/server.js',
    instances: "max",
    env:{
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    }
  }], 
};
