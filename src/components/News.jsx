/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(70);
    let fetchedData = await data.json();
    setArticles(fetchedData.articles);
    setTotalResults(fetchedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

useEffect(() => {
    updateNews();
  // esl  int-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let fetchedData = await data.json();
    setArticles(articles.concat(fetchedData.articles));
    setTotalResults(fetchedData.totalResults);
    setLoading(false);
    setPage(page + 1);
  };

  return (
    <div className="mx-auto relative top-20">
      <h1 className="text-center font-medium text-2xl md:text-3xl font-montserrat text-[#222831]">
        Top headlines
      </h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
        style={{ overflow: "none" }}
        endMessage={
          <p className="text-center text-[#222831] font-montserrat">Hurray!! You have reached the end.</p>
        }
      >
        <div className="mb-10 mt-5 grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 md:gap-y-8 gap-y-2">
          {articles.map((elem) => {
            return (
              <div key={elem.url}>
                <NewsItems
                  title={
                    elem.title
                      ? elem.title.slice(0, 40) + " ..."
                      : "Visit site to know more."
                  }
                  description={
                    elem.description
                      ? elem.description.slice(0, 80) + " ..."
                      : "Visit site to know more."
                  }
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                  author={elem.author ? elem.author : "Unknown"}
                  publishedAt={elem.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default News;
