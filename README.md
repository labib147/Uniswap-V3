# Uniswap V3 Subgraph

### Subgraph Endpoint 

Synced at: https://thegraph.com/hosted-service/subgraph/ianlapham/uniswap-v3-subgraph?selected=playground

Pending Changes at same URL

Run the following commands to establish subgraph locally

1. `npm install`
2. Use `npm run codegen` or `yarn run codegen` to run codegen
3. `yarn run build`
4. `yarn create-local`
5. `yarn deploy-local`
6. Then copy the end point of the "Queries(HTTP)" and paste it in the endpoint of the "graphclientrc.yml" file 

If it does not exist already, create a new file. Name it "graphclientrc.yml" and paste the following inside: 
```
# .graphclientrc.yml
sources:
  - name: 
    handler:
      graphql:
        endpoint: 
```

7. `yarn graphclient build`
8. `yarn graphclient serve-dev`
