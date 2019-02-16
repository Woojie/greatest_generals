import napoleon from '../images/generals/napoleon.jpg'
import genghis from '../images/generals/genghis.jpg'
import khalid from '../images/generals/khalid.png'
import caesar from '../images/generals/caesar.jpg'
import alexander from '../images/generals/alexander.jpg'
import hannibal from '../images/generals/hannibal.jpg'
import moltke from '../images/generals/moltke.jpg'
import suvorov from '../images/generals/suvorov.jpg'
import hanxin from '../images/generals/hanxin.jpg'
import zizka from '../images/generals/zizka.jpg'



function General(name, date, nationality, modernNationality, rank, achievement, title, id, image) {
  this.name = name;
  this.date = date;
  this.nationality = nationality;
  this.moderNationality = modernNationality;
  this.rank = rank;
  this.achievement = achievement;
  this.title = title;
  this.id = id;
  this.image = image

}

export const generalList = [
  new General('Napoleon', 1805, "French Empire", 'France', 1, 'Austerlitz', 'Emperor of the French', 1, napoleon  ),
  new General('Genghis Khan', 1220, "Mongolian Empire", 'Mongolia', 2, 'Conquest of Northern China','Genghis Khan', 2, genghis ),
  new General('Khalid ibn al-Walid', 630, "Umayyad Caliphate", 'Saudi Arabia', 3, 'Yarmouk', 'Supreme Commander', 3, khalid ),
  new General('Julius Caesar', -50, "Roma Republic", 'Italy', 4, 'Alesia', 'Caesar', 4, caesar ),
  new General('Alexander the Great', -332, "Kingdom of Macedonia", 'Greece', 5, 'Gaugamela', 'Basileus/Pharoah/Hegemon/Shah', 5, alexander),
  new General('Hannibal Barca', -200, "Carthage", 'Libya', 6, 'Cannae', 'General', 6, hannibal ),
  new General('Helmuth Graf von Moltke', 1868, "German Empire", 'Germany', 7, 'Field Marshal','Sedan', 7, moltke ),
  new General('Alexander Suvorov', 1786, "Russian Empire", 'Russia', 8, 'Italian Campaign', 'Generalissimo', 8, suvorov ),
  new General('Han Xin', -205, "Han Dynasty", 'China', 9, 'Gaixia', 'Grand Marshal(Da Sima)', 9, hanxin ),
  new General('Jan Zizka', 1421, "Kingdom of Bohemia", 'Czech Repbulic', 10, 'Hussite Wars','Hetman', 10, zizka ),
]