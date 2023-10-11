function findMatching(driver,name){
  return driver.filter(driver=> driver.toLowerCase()=== name.toLowerCase())
}
function fuzzyMatch(drivers,letter){
  return drivers.filter(driver=>driver.toLowerCase().startsWith(letter.toLowerCase()))
}
function matchName(drivers,name){
  return drivers.filter(driver=> driver.name === name);
}