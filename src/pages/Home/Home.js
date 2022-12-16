import * as React from 'react';
import PageLayout from "../../components/pageLayout/PageLayout";
import { getRequest } from "../../helper/apiHelper";
import Card from '../../components/card/Card';

const Home = () => {
  const [apiData, setApiData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    getRequest("products", setIsLoading, setIsError, setApiData);
  }, [])
  console.log(apiData)
  return (
    <PageLayout>
      <div>
        {apiData.map((item) => (
          <Card
            img={item?.imageUrl}
            title={item?.title}
            description={item?.description}
            price={item?.price}
          />
        ))}
      </div>

    </PageLayout>
  )
}

export default Home;

