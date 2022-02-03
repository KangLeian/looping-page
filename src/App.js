import './App.css';
import {useRef, useState, useEffect} from 'react';
// import Home from './components/home.js';
import Pages from './components/pages.js';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function App() {
  const mainPages = [
    {
      id: 0,
      page: "",
      color: "red"
    },
    {
      id: 1,
      page: 1,
      color: "red"
    },
    {
      id: 2,
      page: "",
      color: "red"
    },
    {
      id: 3,
      page: "",
      color: "blue"
    },
    {
      id: 4,
      page: 2,
      color: "blue"
    },{
      id: 5,
      page: "",
      color: "blue"
    },
    {
      id: 6,
      page: "",
      color: "green"
    },
    {
      id: 7,
      page: 3,
      color: "green"
    },
    {
      id: 8,
      page: "",
      color: "green"
    },
    {
      id: 9,
      page: "",
      color: "yellow"
    },{
      id: 10,
      page: 4,
      color: "yellow"
    },
    {
      id: 11,
      page: "",
      color: "yellow"
    },
    {
      id: 12,
      page: "",
      color: "pink"
    },
    {
      id: 13,
      page: 5,
      color: "pink"
    },
    {
      id: 14,
      page: "",
      color: "pink"
    }
  ];
  const [pages, setPages] = useState(mainPages);
  // const mainBody = useRef();
  const byPage = useRef();
  // const pageRef = useRef();
  // const scrollHandler = () => {
    // console.log("page", pageRef.current)
    // console.log("body", mainBody.current);
    // mainBody.current.getBoundingClientRect().y = mainBody.current.getBoundingClientRect().y - mainBody.current.getBoundingClientRect().top;
    // console.log("scroll", mainBody.current.getBoundingClientRect().top);
    // console.log("scroll", )
    // let y = mainBody.current.getBoundingClientRect().top;
    // window.scrollTo( 0, mainBody.current.getBoundingClientRect().top);
    // byPage.current.scrollLeft = -y;

    // console.log("body", mainBody.current.getBoundingClientRect().top);
    // console.log(mainBody.current.getBoundingClientRect().x = -mainBody.current.getBoundingClientRect().top);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler, true);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler, true);
  //   };
  // }, []);


    return (
      <div className="App">
        <ScrollMenu onWheel={onWheel}>
          {
              pages.map(page => {
                return (
                  <Pages ref={byPage} itemId={page.id} key={page.page} page={page.page} color={page.color}></Pages>
                )
              })
            }
        </ScrollMenu>
      </div>
    );
}

export default App;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollPrev();
    if(apiObj.visibleItemsWithoutSeparators[0] == 0){
      apiObj.scrollToItem(apiObj.getItemElementById(14))
    }
  } else if (ev.deltaY > 0) {
    apiObj.scrollNext();
    if(apiObj.visibleItemsWithoutSeparators[2] == 14){
      apiObj.scrollToItem(apiObj.getItemElementById(0))
    }
  }
}