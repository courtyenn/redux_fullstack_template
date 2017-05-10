/*
    This is the "Environment" file. 
    
    It hosts configurations that is globally accessible via the process.env object. 
    It is used to host connectionstrings, server access keys and more. Generally we do not commit this file to a public repo, such as GitHub, because we may have sensitive data. Since we are using localhost, and no one can access our firewall unless we give them permission, we can commit it so that way in the future, we know our env variables are present.
 */
process.env.PORT = 3000;
process.env.DB = 'todoapp';
process.env.ENVIRONMENT = 'dev';

// Notice we do not export these variables. `process` object is specific to Node and works out-of-the-box.