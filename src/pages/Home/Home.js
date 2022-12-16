import * as React from 'react';
import PageLayout from "../../components/pageLayout/PageLayout";
import { getRequest } from "../../helper/apiHelper";

const Home = () => {
  const [apiData, setApiData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    getRequest("product", setIsLoading, setIsError, setApiData);
  }, [])
  console.log(apiData)
  return (
    <PageLayout>
      <div>hdhdfd</div>
    </PageLayout>
  )
}

export default Home;

