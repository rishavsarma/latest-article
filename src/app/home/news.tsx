"use client";

import { getNews } from "@/AppActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const News = () => {
  const [country, setCountry] = useState("in");
  const [topic, setTopic] = useState("");
  const { data, isFetching } = useQuery({
    queryKey: ["getNews", country, topic],
    queryFn: () => getNews(country, topic),
  });

  function debounce<T extends (...args: any[]) => any>(func: T, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    } as (...args: Parameters<T>) => ReturnType<T>;
  }

  const debouncedSetTopic = debounce((value: string) => setTopic(value), 500);
  return (
    <div className="space-y-4">
      <Input
        onChange={(e) => debouncedSetTopic(e.target.value)}
        placeholder="Search Category"
      />
      <div className="space-y-4 min-h-screen">
        {isFetching ? (
          <>
            <Skeleton className="h-72" />
            <Skeleton className="h-72" />
            <Skeleton className="h-72" />
          </>
        ) : (
          data?.data.articles.map((article: any) => (
            <Card key={article.title} className="p-4 space-y-4 tracking-wide ">
              <div className="flex justify-center">
                <img
                  className="object-cover rounded-lg"
                  src={article.urlToImage}
                  alt={article.title}
                />
              </div>
              <p className="font-medium">{article.title}</p>
              <p>{article.description}</p>

              <div className="flex justify-between pr-2 space-x-4 items-center">
                <p>Source: {article?.source?.name}</p>
                <a href={article.url}>
                  <Button>Read More</Button>
                </a>
              </div>
            </Card>
          ))
        )}
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default News;
