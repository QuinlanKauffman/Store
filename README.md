# TS
Create an entire TypeScript front-end

## Local
- Update node packages when pull repo
    - npm install
- Run live-server locally from rpoject's root directory
    - live-server

# Features
- IComponent
    - One single method
    - getOuterHTMLElement()
    - Can use TypeScript to apply styling and classes
    - Does not require any string interpolation like in Angular
- IService
    - One single attribue
    - base_endpoint
- Store -> still need to configure
    - Configured using Singleton design pattern
    - Requires a static INSTANCE
    - Static means only one can exist
- HTTP
    - Tunnel for XMLHttpRequests
    - Swap out the test/production base URL
    - https://localhost/
    - https://production.org/

