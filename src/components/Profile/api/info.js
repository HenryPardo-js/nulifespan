export async function getUser(emailR){
    try {
        const data={email:emailR}
        const url="https://deploywk.herokuapp.com/nulifespan-customer-dashboard/";
        const params = {
          method: "POST",
          body: JSON.stringify(data),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        // console.log(result);
        return result;
      } catch (error) {
        console.log(error);
      }
}

export async function getCustomer(emailR){
  try {
      const url=`https://deploywk.herokuapp.com/nulifespan-customer-data/nulifespan/${emailR}/`;
      const params = {
        method: "POST",
      };
      const response = await fetch(url, params);
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
}