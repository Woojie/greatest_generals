function General(name, date, nationality, modernNationality, rank, achievement, title, id) {
  this.name = name;
  this.date = date;
  this.nationality = nationality;
  this.moderNationality = modernNationality;
  this.rank = rank;
  this.achievement = achievement;
  this.id = id

}

export const generalList = [
  new General('Napoleon', 1805, "French Empire", 'France', 1, 'Austerlitz', 'Emperor of the French', 1 ),
  new General('Genghis Khan', 1220, "Mongolian Empire", 'Mongolia', 2, 'Conquest of Northern China','Genghis Khan', 2 ),
  new General('Khalid ibn al-Walid', 630, "Umayyad Caliphate", 'Saudi Arabia', 3, 'Yarmouk', 'Supreme Commander', 3 ),
  new General('Julius Caesar', -50, "Roma Republic", 'Italy', 4, 'Alesia', 'Caesar', 4 ),
  new General('Alexander the Great', -332, "Kingdom of Macedonia", 'Greece', 5, 'Gaugamela', 'Basileus/Pharoah/Hegemon/Shah', 5 ),
  new General('Hannibal Barca', -200, "Carthage", 'Libya', 6, 'Cannae', 'General', 6 ),
  new General('Helmuth Graf von Moltke', 1868, "German Empire", 'Germany', 7, 'Field Marshal','Sedan', 7 ),
  new General('Alexander Suvorov', 1786, "Russian Empire", 'Russia', 8, 'Italian Campaign', 'Generalissimo', 8 ),
  new General('Han Xin', -205, "Han Dynasty", 'China', 9, 'Gaixia', 'Grand Marshal(Da Sima)', 9 ),
  new General('Jan Zizka', 1421, "Kingdom of Bohemia", 'Czech Repbulic', 10, 'Hussite Wars','Hetman', 10 ),
]