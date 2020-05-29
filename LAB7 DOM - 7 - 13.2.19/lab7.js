var artnum = 0;

var headlines = Array("MS Dhoni secret behind recent back-to-back half-centuries against Australia revealed","","","");

var bylines = Array("Atul Mishra","","","");

var contents = Array("It has been a memorable start to 2019 for veteran Indian wicketkeeper-batsman MS Dhoni as he shrugged off all concerns regarding his World Cup spot with his refound touch. Although, it is not Dhoni the finisher who is back, but the former Indian skipper has returned to form with renewed responsibility at the No.5 spot in the ODI set up. And one of the primary reason that played in Dhoni's recent success in Australia and New Zealand was the modification he made to his bat.<br><br>Dhoni recorded a poor 2018 scoring only 275 runs in 13 ODI innings at an average of 25 which stands as his worst numbers in the format in his 12-year-long career. With the likes of Dinesh Karthik and Rishabh Pant breathing down his neck, questions were raised on his World Cup spot in the Indian squad despite constant backing from his teammates.<br><br>However, with the start of 2019, Dhoni bounced back to form to score three back-to-back fifties in the three-match ODI series against Australia at an astronomical average of 193 to earn his first Man of the Series award in seven years. He followed it up with an unbeaten 48 against New Zealand at Mount Maunganui. He amassed 242 runs in six ODI innings this year at an average of 121. And in the three-match T20I series he scored 61 runs at 30.50.<br><br>However, it was only during the second T20I match in New Zealand that the change in Dhoni's bat was glaring in comparison to Rishabh Pant's. The bottom of Dhoni's willow seemed more round. <br><br>“He has made the modification to suit his areas of strength and to counter the areas in which bowlers have been targeting him,” said a source close to his management team in conversation with Hindustan Times.<br><br>Dhoni, who usually bats with the Spartan brand, was seen with his modified bat even during India's successful Asia Cup 2018 campaign in the UAE. Although, it was during the Australia series that he managed to show his class with the willow.<br><br>Basically, it is more wood at the bottom and back of the bat. Earlier, it was mainly about the sweet spot. The basic idea is to have more wood behind the ball in your preferred shots. More wood at the bottom will help in elevation and generate more power. When your game is set, bowlers come up with a plan to counter and the batsman has to get a new plan. Or, it could be to play a particular shot better, he said.<br><br>Bat manufacturing company BAS, who had earlier helped Dhoni, saw it as a change to suit conditions. <br><br>“It differs from wicket to wicket, country to country. In India they use different bats, prefer heavier (bats) because the ball comes slower on the slow wickets; on faster wickets, they prefer lighter blades for better timing. Dhoni’s bat weighs around 1150gms,” said BAS partner Ashwini Kohli. <br><br>Be it his bat, be it his batting, but Dhoni's form has been the biggest news and the biggest takeaway for India after the tour of Down Under. And he is now being back by many to create the difference for India at the World Cup. He will be expected to be part of the Australia series at home that starts February 24 where India will play two T20Is and five one-dayers against the visitors.","","","");

var ads = Array("<a href='https://www.amazon.in/Cricket-Kits-%E2%82%B91-000-%E2%82%B95/s?ie=UTF8&page=1&rh=n%3A3403860031%2Cp_36%3A1318504031'><img src='cricketad1.png'></img>Cricket Kit with Bag</a><a href='https://www.amazon.in/SG-Economy-Cricket-Kit-Full/dp/B075R4M529?tag=googinhydr18418-21&tag=googinkenshoo-21&ascsubtag=_k_EAIaIQobChMIppii9K644AIVAQ4rCh2LPwYGEAQYAiABEgJJ_fD_BwE_k_&gclid=EAIaIQobChMIppii9K644AIVAQ4rCh2LPwYGEAQYAiABEgJJ_fD_BwE'><img src='cricketad2.png'></img>SG- Economy cricket kit - Full</a>", "","","");

function prev() { 
	artnum = (artnum-1)%4;
	content = contents[artnum];
	headline = headline[artnum];
	byline = byline[artnum];
        ad = ads[artnum];
	document.GetElementById("headline").innerHTML = headline;
	document.GetElementById("byline").innerHTML = byline;
	document.GetElementById("content").innerHTML = content;
	document.GetElementById("ads").innerHTML = ad;
}

function next() { 
	artnum = (artnum+1)%4;
	content = contents[artnum];
	headline = headline[artnum];
	byline = byline[artnum];
        ad = ads[artnum];
	document.GetElementById("headline").innerHTML = headline;
	document.GetElementById("byline").innerHTML = byline;
	document.GetElementById("content").innerHTML = content;
	document.GetElementById("ads").innerHTML = ad;
}


