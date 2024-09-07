import styled from "styled-components";
import Typing from "../../components/common/Typing";
import { useEffect, useState } from "react";
import theme from "../../themes/theme";
import gsap from "gsap";
import thankyoume from "../../assets/images/common/aboutme.png";

const Thankyou = () => {
	// 글자 타이핑
	const [isTyping, setIsTyping] = useState(false);
	useEffect(()=> {
		setIsTyping(true)
	})

	// 화면 애니메이션 효과
	useEffect(() => {
	const tl = gsap.timeline();
	tl.to(".typing-text", {opacity: 1})
	tl.fromTo(".contact-box", {opacity: 0 }, {opacity:1, duration: 2,
		delay: 0.5,
	})}, [])

  return <Wrap>
	<Typing 
		text={"THANK YOU"}
		isTyping={isTyping}
	/>
	
		<div className="contact-box">
			<h4 className="contact-tit">Contact Me</h4>
			<div className="contact-text">			
				<div className="img-box">
				<img src={thankyoume} alt="내 사진" />
				</div>
				<div className="text-box">
					<div className="comment-box">
						<p>
							사용자를 중심으로 하며 <br /> 꾸준히 발전하는 웹퍼블리셔입니다
						</p>
					</div>					
					<div className="email-box"><span >E-mail</span>
					<p>mouom11@naver.com</p></div>
					<div className="github-box"><span >Github</span>
					<a href="https://github.com/hyeeons">https://github.com/hyeeons</a>
					</div>
				</div>
				
				
			</div>			
		</div>
		<div className="bottom-box">
			<h4>&copy;LeeHyunJeong All Rights Reserved</h4>
		</div>
	
  </Wrap>;
};

const Wrap = styled.div`
	height: 100vh;

	.typing-text {
		font-size: 90px;
		font-weight: 800;
		padding: 125px 0 45px;
		/* display: block;
		font-size: 90px;
		font-weight: 800;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translateX(-50%); */
	}

.contact-box {
	width: 50%;
	background-color: white;
	margin: 0 auto;
	border-radius: 10px;
	position: relative;
	padding: 60px 0 70px;	
}
.contact-tit {
	padding-bottom: 30px;
	text-align: center;
	font-size: 27px;
	font-weight: 600;
	color: ${theme.colors.grayDefault};
}
.contact-text {
	display: flex;
	justify-content: space-between;
	
	/* flex-direction: column; */
	/* padding-left: 50px; */
	/* gap: 17px; */
}
.img-box {
	text-align: center;
	width: 50%;

	img {
		width: 60%;
		border-radius: 9999px;
		background-color: #e0e0e0;


	}
}
.text-box {
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 17px;
	span {
		font-size: 20px;
		font-weight: 600;
		border-bottom: 1px solid ${theme.colors.gnbLine};
		padding-bottom: 4px;
		
	}
	p{
		font-size: 17px;
		padding: 10px 0;
	}
	a {
		display: block;
		font-size: 17px;
		padding: 10px 0;
	}
	.comment-box {
		p {
			font-size: 18px;
			font-weight: 500;
			line-height: 1.5;
		}
	}
}

.bottom-box {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	padding-bottom: 10px;
	color: ${theme.colors.gnbLine};
	font-weight: 300;
}
	


`
export default Thankyou;
