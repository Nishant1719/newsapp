import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Bangladesh disappeared: Uncovering a secret jail next to an international airport",
      "description": "Six men in Bangladesh tell the BBC about how they were forced into detention under the now-deposed government.",
      "url": "https://www.bbc.co.uk/news/articles/cly6lp567r8o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1c88/live/86669850-1064-11f0-ac9f-c37d6fd89579.jpg",
      "publishedAt": "2025-04-16T05:52:20.1198799Z",
      "content": "It was an open secret that Hasina had no tolerance for political dissent. Criticising her could get you \"disappeared\" without a trace, former detainees, opponents and investigators say.\r\nBut the tota… [+1441 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Supreme Court to announce ruling on definition of a woman",
      "description": "The Supreme Court is to issue its judgement on how a woman should be defined under the law.",
      "url": "https://www.bbc.co.uk/news/articles/cvg7pqzk47zo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/110c/live/c4bd9190-1a27-11f0-a455-cf1d5f751d2f.jpg",
      "publishedAt": "2025-04-16T05:22:22.0736106Z",
      "content": "The legal dispute began in 2018, when the Scottish Parliament passed a bill designed to ensure gender balance on public sector boards.\r\nFor Women Scotland complained that ministers had included trans… [+1063 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Wildfires pushing rare wildlife to extinction, say conservationists",
      "description": "Wildfires could spell the end for rare species like water voles and hen harriers, conservationists warn.",
      "url": "https://www.bbc.co.uk/news/articles/c2dej3x9432o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9716/live/e9920830-1a21-11f0-9b40-6d3b8c877a52.jpg",
      "publishedAt": "2025-04-16T04:52:24.2451937Z",
      "content": "Coed Cadw, the Woodland Trust in Wales, said an \"irreplaceable\" area of temperate Atlantic rainforest had been affected at Allt Boeth near Aberystwyth, with damage to protected bluebells too.\r\nAlso k… [+765 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "The stars who turned their back on Hollywood (and some who returned)",
      "description": "As Cate Blanchett considers giving up acting, we take a look at other stars who quit the profession.",
      "url": "https://www.bbc.co.uk/news/articles/cd7vyj8gxwgo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1ed4/live/9f861960-19eb-11f0-97aa-8f143d28cc2f.jpg",
      "publishedAt": "2025-04-16T03:52:21.7306967Z",
      "content": "Actress Cate Blanchett has said she wants to quit acting to do other things, joining a long line of big Hollywood stars who gave up the red carpets for a different lifestyle.\r\nThe 55-year-old is seen… [+1305 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Manchester Arena survivor 'angry' and 'broken' by prison attack",
      "description": "Martin Hibbert and his daughter Eve suffered severe injuries as a result of the bombing carried out by Hashem Abedi.",
      "url": "https://www.bbc.co.uk/news/articles/cg5qe6j01g6o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b12f/live/c23ad620-1a5a-11f0-8a1e-3ff815141b98.jpg",
      "publishedAt": "2025-04-16T02:22:20.6375045Z",
      "content": "Abedi had been held in a separation centre - which holds a small number of inmates deemed to be dangerous and extremist - at Frankland.\r\nHe moved to Frankland after carrying out an earlier attack on … [+739 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Miskin mum's unique friendship with nurse who held her dying son",
      "description": "Rhian and Andrea have been friends for 13 years after meeting in the most tragic of circumstances.",
      "url": "https://www.bbc.co.uk/news/articles/cvgpn9rrdzqo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9214/live/d78831b0-193a-11f0-8fd7-0d6f4cccf9ff.jpg",
      "publishedAt": "2025-04-16T01:37:22.4807605Z",
      "content": "Over the years, Rhian has roped Andrea into many fundraising challenges for her charity. \r\nNow Andrea is hoping to encourage other professionals to consider seeking support. \r\nThe You Can't Pour from… [+1294 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Nvidia expects $5.5bn hit as US tightens chip export rules to China",
      "description": "The chip manufacturing giant, which has been at the heart of the AI boom, will require licences to export its H20 AI chip to China.",
      "url": "https://www.bbc.co.uk/news/articles/cm2xzn6jmzpo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6dc7/live/021993c0-1a4d-11f0-b6de-656b207d7440.jpg",
      "publishedAt": "2025-04-16T01:22:17.0742011Z",
      "content": "Nvidia announced on Tuesday that the US government had told it last week that the H20 chip required a permit to be sold to China, including Hong Kong. \r\nThe tech giant said federal officials had advi… [+1142 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Tariffs fallout: The US will struggle to take on Asia over chips",
      "description": "America is trying to create a chip industry through isolation and protectionism, when what allowed it to emerge in Asia is the opposite: collaboration",
      "url": "https://www.bbc.co.uk/news/articles/cd9ljwgg9y0o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0eca/live/19974db0-19fa-11f0-8a1e-3ff815141b98.png",
      "publishedAt": "2025-04-16T00:22:20.6373036Z",
      "content": "Even so, Trump has doubled down on tariffs, ordering a national security trade investigation into the semiconductor sector.\r\n\"It's a wrench in the machine a big wrench,\" says Mr Einstein. \"Japan for … [+947 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Disposable vape use falling in UK ahead of government ban",
      "description": "The number of people vaping in the UK has stalled, while disposable vape usage has fallen, a study suggests.",
      "url": "https://www.bbc.co.uk/news/articles/c0kxzylvvvvo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9b37/live/49a71f10-1a15-11f0-a455-cf1d5f751d2f.jpg",
      "publishedAt": "2025-04-16T00:07:25.3389442Z",
      "content": "The UK government ban on disposable and single-use vapes is aimed at stopping littering as, in most cases, the vapes cannot be recycled and often end up in landfill or pollute natural environments. \r… [+1451 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Newspaper headlines: 'Bin strike blues' and 'China handed NHS records'",
      "description": "A range of stories on the front of Wednesday's papers including the latest on bin strikes in Birmingham.",
      "url": "https://www.bbc.co.uk/news/articles/cpq7vq47wg3o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/a99a/live/b73fa290-1a42-11f0-8a1e-3ff815141b98.png",
      "publishedAt": "2025-04-16T00:07:23.32382Z",
      "content": "Image caption, The largest education union in the country, the National Education Union, claims Reform UK is as a \"racist and far-right\" party, the Guardian reports as its front page lead. The motion… [+214 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div>
        <div className="container my-3">
           <h1>News Headlines</h1>
          <div className="row">
            {this.state.articles.map((ele) => {
              return <div className="col-md-4 my-2" key={ele.url}>
                <NewsItem  title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsurl={ele.url}/>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent
