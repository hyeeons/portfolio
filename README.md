# 📚 React를 활용한 포트폴리오 사이트
<br>

## 🙌 프로젝트 소개
React를 활용한 포트폴리오 사이트 👉[  보러가기 ](https://hyeeons.github.io/portfolio/) <br><br>
프론트엔드 개발자 지원하는 포트폴리오 사이트입니다. <br> 
사용자가 프로젝트를 포트폴리오 내에서 한 눈에 알아볼 수 있도록 직관적으로 제작하였으며, <br> 리액트의 컴포넌트를 활용하여 유지/보수의 효율적인 관리가 가능합니다. <br><br>

### 🛠 활용언어 및 기술
- React
- HTML & SCSS
- Javascript
- Styled-components
- Gsap 
- Router
- useEffect
- useState


<br>


### ✔️ 포트폴리오 사이트 Point!
- 직관적인 디자인으로 사이트 사용자 경험을 증가시킴
- iframe을 활용하여 포트폴리오 내에서 사이트를 한 눈에 볼 수 있도록 제작
- components와 props를 활용함으로써 통일감있는 디자인과 유지/보수 관리가 효율적임
- useState, useEffect와 같은 Hook을 사용함으로써 동적인 사이트 구현 

<br>

## 👩 작업과정과 사용한 코드, 느낀 점

<br>

### ❓React로 작업한 이유

기존 HTML과 CSS만을 활용해서 사이트를 작업했을 때에 페이지 이동이나 코드수정 등에 있어 불편함을 느꼈습니다. 또한 동적인 사이트를 구현할 때에도 자바스크립트 코드를 따로 작성해야 하는 점이 아쉬웠습니다. 이후 React를 경험해보니 컴포넌트를 만들어서 활용하고 컴포넌트 내에서 HTML, CSS, Javascript를 모두 사용할 수 있다는 점이 매우 편리하교 효율적이라는 것을 느꼈습니다. 따라서, 포트폴리오 사이트를 React로 제작하기로 하였습니다.

리액트로 처음 사이트를 작업해 본 것은 Chakra UI 라이브러리를 활용한 Horizon-Ui Dashboard 클론 코딩이었습니다. UI 라이브러리를 활용해서 작업하다보니 라이브러리를 사용하지 않고 작업을 했을 때가 궁금해졌습니다. 그래서 이번 작업에서는 UI 라이브러리를 사용하지 않고 Styled-components를 활용하여 제작했습니다. 

<br>

### ❗️기획의도
포트폴리오의 디자인을 기획하며 여러가지 포트폴리오 작업물을 참고하였습니다. 그 과정에서 포트폴리오에 있는 프로젝트 사이트를 하나하나 클릭하고 이동해서 보아야 하는 것이 불편하게 느껴졌습니다.  그래서 그 때 **'포트폴리오 내에서 사이트를 직관적으로 바로 볼 수 있다면 좋겠다'** 라는 생각이 들었습니다. 이를 구현하기 위해 프로젝트 소개 페이지를 Dashboard 형태로 작업하였으며, 어떠한 프로젝트가 있는 지 바로 알 수 있도록 하였습니다. 또한 포트폴리오 사이트 내에 프로젝트 사이트를 각각 불러와서 사이트를 미리 볼 수 있도록 구현하고 웹사이트 링크를 별도 추가하여 사이트로 이동해서 볼 수 있도록 했습니다.<br><br>



### 📌 iframe으로 사이트 불러오기
포트폴리오 사이트에 프로젝트 사이트를 불러오기 위해서 사용한 방법은 **iframe을 활용하는 것**이었습니다. 다만 한 가지 문제가 생겼습니다. 생각했던 디자인과 다르게 **불러오는 사이트의 크기가 너무 커서 한 눈에 보이지 않는 것**이었습니다. 이를 해결할 수 있는 방법을 찾기 시작했고 iframe의 scale을 조정할 수 있다는 것을 알았습니다. 따라서 **0.8배로 scale을 줄여서 한 눈에 볼 수 있도록 작업**하고 브라우저 종류에 상관없이 동일한 화면을 구현하기 위해 브라우저마다 배수를 설정해 주었습니다.

<details><summary> 코드보기
</summary>

```
<PageBox>
        <iframe className="frame" src={iframesrc}></iframe>
</PageBox>

const PageBox = styled.div`
  width: 90%;
  height: 100vh;
  overflow: hidden;
  margin-left: 283px;
  .frame {
    width: 130%;
    height: 125%;
    border: 0;
    -ms-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    -webkit-transform: scale(0.8);
    transform: scale(0.8);

    -ms-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
`;
// iframe의 scale과 위치를 위와 같이 조정함

```

</details>
<br>

### 📌 Router를 이용한 페이지 이동
React Router를 활용하여 Router의 경로를 설정해준 후, **해당 경로에 따라 필요한 페이지 컴포넌트를 불러올 수 있도록** 작업했습니다. 이로 인해 페이지간의 이동을 편리하게 관리할 수 있었습니다. 또한, 공통된 레이아웃도 라우터에서 설정하여 페이지에 필요한 레이아웃을 적용하였습니다. 


<details><summary> 코드보기
</summary>

```
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout, { PfLayout } from "./components/layout/Layout";
import Home from "./views/home/Home";
import AboutMe from "./views/aboutMe/AboutMe";
import Thankyou from "./views/thankyou/Thankyou";
import Vita500 from "./views/vita500/Vita500";
import SamsungHospital from "./views/samsungHospital/SamsungHospital";
import Dashboard from "./views/dashboard/Dashboard";
import JsDiary from "./views/jsDiary/JsDiary";
import Portfolio from "./views/portfolio/Portfolio";

const Routers = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Thankyou />} />
          </Route>

          <Route element={<PfLayout />}>
            <Route path="/react_portfolio" element={<Portfolio />} />
            <Route path="/vita500" element={<Vita500 />} />
            <Route path="/samsunghospital" element={<SamsungHospital />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jsdiary" element={<JsDiary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;


```

</details>
<br>

### 📌 Components와 Props의 활용
리액트의 가장 장점 중 하나는 컴포넌트와 props를 활용하여 통일감있는 디자인과 편리한 유지보수가 있습니다. 그래서 이번 사이트 제작에서도 이를 적극 활용하였습니다. **자주 사용하는 디자인이나 기능을 컴포넌트로 만든 후 필요한 상황에 따라 import하여 사용**했습니다.  또한, 프로젝트 설명과 같이 포맷은 같으나 내용이 달라지는 경우에는 **컴포넌트를 만들어놓고 props로 들어갈 내용을 전달받을 수 있도록** 하였습니다. 이로 인해 코드의 가독성을 높이고 관리를 효율성을 높였습니다.


<details><summary> 코드보기 

</summary>
<br>
프로젝트 페이지에 공통적으로 들어가는 SitePage 컴포넌트를 만든 후, <br> 각 프로젝트에 따라 들어갈 내용을 props로 전달하여 사이트를 제작함 <br>

```
//프로젝트를 설명하는 SitePage 컴포넌트

import styled from "styled-components";
import SkillBox from "../common/SkillBox";
import GotoButton from "../common/Button";

const SitePage = ({
  iframesrc,
  skill,
  title,
  subtitle,
  subText,
  siteType,
  pageType,
  pageText,
  projectComment,
  website,
  github,
  bgImg,
  display,
  figma,
}) => {
  return (
    <FlexBox>
      <PageBox>
        <iframe className="frame" src={iframesrc}></iframe>
      </PageBox>
      <ComtWrap bgImg={bgImg}>
        <div className="cont">
          <h2>{title}</h2>
          <div className="text1">
            <h3>{subtitle}</h3>
            <h3>{subText}</h3>
          </div>

          <div className="text2">
            <h4>{siteType}</h4>
            <h4>{pageType}</h4>
            <h4>{pageText}</h4>
          </div>
          <div className="skillBox">
            <SkillBox skill={skill} />
          </div>
          <div className="buttonBox">
            <GotoButton
              website={website}
              github={github}
              figma={figma}
              display={display}
            />
          </div>
          <div className="text3">
            <p>{projectComment}</p>
          </div>
        </div>
      </ComtWrap>
    </FlexBox>
  );
};
```

```
// vita500 프로젝트 컴포넌트

import SitePage from "../../components/layout/SitePage";
import bgVita500 from "../../assets/images/projects/bg_vita500_2.png";
import theme from "../../themes/theme";

const Vita500 = () => {
  const skillArr = ["HTML", "CSS", "Javascript", "jQuery"];

  return (
    <>
      <SitePage
        iframesrc="https://hyeeons.github.io/vita500/"
        skill={skillArr}
        title="비타500 리뉴얼 사이트"
        subtitle="광동제약의 비타500 브랜드 소개 페이지"
        subText="100% 개인작업"
        siteType="PC & Mobile"
        pageType="메인페이지"
        pageText="사이트 리뉴얼 기획/디자인 및 사이트 제작"
        website="https://hyeeons.github.io/vita500/"
        github="https://github.com/hyeeons/vita500"
     figma="https://www.figma.com/file/4HJHz7EWSDft9uy5ZpWqvv/%EA%B4%91%EB%8F%99%EC%A0%9C%EC%95%BD_%EB%B9%84%ED%83%80500-%EB%A6%AC%EB%89%B4%EC%96%BC%EC%82%AC%EC%9D%B4%ED%8A%B8?type=design&node-id=0%3A1&mode=design&t=QQ9MjlkYaBsY2r1A-1"
        projectComment="사이트 설명이 들어갈 자리입니다"
        bgImg={bgVita500}
      />
    </>
  );
};

export default Vita500;

```

</details>

<br>


### 📌 useState, useEffect를 활용하여 동적인 페이지 구현
프로젝트 소개페이지의 프로젝트 목록을 나타내는 Gnb 컴포넌트에서 useState, useEffect를 활용했습니다. iframe으로 각각 다른 사이트를 불러오기 때문에 색감이나 디자인이 어울리지 않거나 자칫하면 사이트가 너무 정적일 수 있겠다는 생각을 했습니다. 이를 보완하기 위해 **useState를 사용하여 해당 항목을 클릭하면 그에 맞는 디자인을 변경**시킴으로써 **생동감있는 동적 페이지를 구현**했습니다. 하지만 이렇게 했더니 문제점이 발견되었습니다. 해당 프로젝트 항목을 클릭한 후, 페이지의 url을 공유하면 **gnb의 메뉴 부분이 업데이트 되지 않고 초기설정된 값**으로 되는 것이었습니다. 이를 해결하기 위해 방법을 찾기 시작했고 **useEffect를 활용하여 페이지가 렌더링 될 때마다 현재의 경로를 반영할 수 있도록** 함으로써 해결했습니다. 또한, 프로젝트마다 메뉴 배열과 map 함수를 활용하여 프로젝트의 추가 및 수정을 편리하게 했습니다.


<details><summary> 코드보기
</summary>

```
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import theme from "../../themes/theme";
import { PiDesktop } from "react-icons/pi";
import { PiDesktopFill } from "react-icons/pi";
import { RiPagesFill } from "react-icons/ri";
import { FaPager } from "react-icons/fa";
import { useEffect, useState } from "react";

const Gnb = () => {
  const [isSelected, setIsSelected] = useState(0);
  const location = useLocation();

  const MenuArr = [
    {
      path: "/react_portfolio",
      text: "포트폴리오 사이트",
      color: "portfolio",
    },
    {
      path: "/vita500",
      text: "비타500 리뉴얼",
      color: "orangeVita",
    },
    {
      path: "/samsunghospital",
      text: "삼성서울병원 리뉴얼",
      color: "blueSamsung",
    },

    {
      path: "/dashboard",
      text: "Dashboard",
      color: "dashboard",
    },
    // {
    //   path: "/jsdiary",
    //   //   icon: <PiDesktop />,
    //   text: "Javascript Diary",
    //   color: "red",
    // },
  ];

  const SelectColor = () => {
    return theme.colors[MenuArr[isSelected].color];
  };

  const SelectText = (index) => {
    return {
      color:
        isSelected === index
          ? theme.colors.txtdefault
          : //   ? SelectColor(index)
            theme.colors.grayDefault,

      fontWeight: isSelected === index ? "800" : "600",
      background:
        isSelected === index
          ? `linear-gradient(
		to bottom,
		transparent 70%,
		${SelectColor()} 30% `
          : "",
    };
  };

  const CurrentMenu = () => {
    const currentPath = location.pathname;
    const index = MenuArr.findIndex((menu) => menu.path === currentPath);
    return index !== -1 ? index : 0;
  };

  useEffect(() => {
    setIsSelected(CurrentMenu());
  }, [location.pathname]);

  return (
    <GnbWrap>
      <div className="gnbcontainer">
        <div className="header">
          <Link to="/">
            <h1 style={{ color: SelectColor() }}>PROJECTS</h1>
          </Link>
        </div>
        <div className="menuWrap">
          {MenuArr.map(({ path, icon, text, color }, index) => (
            <div className="menu-container" key={index}>
              <Link
                to={path}
                className="link"
                onClick={() => {
                  setIsSelected(index);
                }}
              >
                <div className="menu-box">
                  <div className="menu menu-icon" style={SelectText(index)}>
                    {isSelected === index ? <PiDesktopFill /> : <PiDesktop />}
                  </div>
                  <div className="menu menu-text" style={SelectText(index)}>
                    {text}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </GnbWrap>
  );
};
```
</details>

<br>

### 💡 작업을 하며 느낀 점
Horizon-UI Dashboard 클론코딩을 했을 때와 다르게 이번 작업에서는 UI 라이브러리를 사용하지 않고 사이트를 작업 해 보았고 이전보다 리액트에 대해 훨씬 더 잘 알 수 있었습니다. 비록 초기 세팅 시에는 시간이 조금 걸렸지만 세팅을 해 놓고 감을 익히니 작업속도가 훨씬 빨라지고 수월했습니다. 이를 통해서 **리액트를 활용하여 컴포넌트를 만들어 작업하고 관리하는 것을 익힐 수 있었고 props를 활용해서 코드를 간결화시키고 가독성 좋게 코드를 관리하는 법**을 알게 되었습니다. 또한, Dashboard 클론코딩에서도 사용했던 **useState와 useEffect와 같은 Hook을 응용해서 사용**해보며 개념을 익힐 수 있었습니다. 이번 작업을 통해 왜 리액트가 현재 가장 많이 사용하는 자바스크립트 라이브러리라고 하는 지 알 수 있었고 리액트를 활용하는 것에 흥미를 더욱 느꼈습니다. 따라서 다음 작업에서는 API나 React Hook을 더 다양하게 해 활용해 보거나 데이터를 관리할 수 있는 Dashboard 페이지도 제작해보고 싶다는 생각을 했습니다.


<br>
