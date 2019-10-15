room1 = game.createRoom("room1", "bedRoom.png") // 방 생성
room2 = game.createRoom("room2","livingRoom.png") // 방 생성

room1.door = room1.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room1.door.setWidth(136) // 크기 조절
room1.locateObject(room1.door, 1049, 300) // 문 배치
room1.door.open()

room1.door.onClick = function() { // door를 클릭했을 때
    game.move(room2)
}

game.start(room1)