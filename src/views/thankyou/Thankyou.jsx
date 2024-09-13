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
							사용자 경험을 중요하게 생각하며 <br />
							어제보다 오늘 더 성장하는 
							웹퍼블리셔입니다.
						</p>
					</div>					
					<div className="email-box"><span >E-mail</span>
					<p className="email-txt">mouom11@naver.com</p></div>
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
		padding: 6% 0 0 ;
		/* padding: 125px 0 45px; */
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
	margin: 17px auto 0;
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
	align-items: center;
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
	gap: 15px;
	span {
		font-size: 20px;
		font-weight: 600;
		border-bottom: 1px solid ${theme.colors.gnbLine};
		padding-bottom: 4px;
		
	}
	.email-txt{
		font-size: 17px;
		padding: 10px 0;
		color: ${theme.colors.txtdefault};
		opacity: 0.7;
		cursor: pointer;
		&:hover {
			opacity: 1;
			text-decoration: underline;
		}
	}
	a {
		display: block;
		font-size: 17px;
		padding: 10px 0;
		color: ${theme.colors.txtdefault};
		opacity: 0.7;
		cursor: pointer;
		&:hover {
			opacity: 1;
			text-decoration: underline;
		}
	}
	.comment-box {
		p {
			font-size: 18px;
			font-weight: 400;
			line-height: 1.5;
			color: ${theme.colors.txtdefault};
			opacity: 1;
			margin-bottom: 10px;
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
