room1 = game.createRoom("room1", "bedRoom.png")
room2 = game.createRoom("room2", "livingRoom.png")
room3 = game.createRoom("room3", "bathroom.png")

////////////////////***room1***////////////////////

room1.door = room1.createObject("door", "문-오른쪽-닫힘.png")
room1.door.setWidth(136)
room1.locateObject(room1.door, 1049, 350)
room1.door.lock()

room1.door.onClick = function() {
    if(room1.door.isClosed()) {
        room1.door.open()
    } else if(room1.door.isOpened()) {
        game.move(room2)
    } else if (room1.door.isLocked()) {
        printMessage("철커덕")
        room1.door.unlock()
    }
}

room1.door.onOpen = function() {
    room1.door.setSprite("문-오른쪽-열림.png")
}

room1.table = room1.createObject("table", "테이블2-2.png")
room1.table.setWidth(150)
room1.locateObject(room1.table, 480, 480)

room1.bed = room1.createObject("bed", "침대-2.png")
room1.bed.setWidth(550)
room1.locateObject(room1.bed, 310, 470)
room1.bed.onClick = function() {
    if(game.getHandItem() == room3.pesticide) {
        printMessage("이불 밑에 숨어있나?")
    } else {
        printMessage("빨리 누워서 자고싶어...")
    }
}

roomLight = true

room1.stand = room1.createObject("stand", "스탠드.png")
room1.stand.setWidth(40)
room1.locateObject(room1.stand, 480, 390)

room1.stand.onClick = function() {
	if(roomLight) {
		room1.setRoomLight(0.5)
		roomLight = false
	} else {
		room1.setRoomLight(1)
		roomLight = true
	}
}

room1.drawers = room1.createObject("drawers", "찬장-오른쪽-닫힘.png")
room1.drawers.setWidth(180)
room1.locateObject(room1.drawers, 770, 420)

room1.mosquito = room1.createObject("mosquito", "모기.png")
room1.mosquito.setWidth(50)
room1.locateObject(room1.mosquito, 770, 420)
room1.mosquito.hide()

room1.drawers.onClick = function() {
    if(room1.drawers.isClosed()) {
        room1.drawers.open()
    } else if(room1.drawers.isOpened()) {
        room1.drawers.close()
    } 
}

room1.drawers.onOpen = function() {
    room1.drawers.setSprite("찬장-오른쪽-닫힘.png")
}

room1.drawers.onClose = function() {
    room1.drawers.setSprite("찬장-오른쪽-열림.png")
    printMessage("아무것도 없어...")
    if((game.getHandItem() == room3.pesticide)&&room2.mosquito.bedroom) {
        printMessage("이놈의 모기 드디어 찾았다!")
        room1.mosquito.show()
    }
}

room1.mosquito.onClick = function() {
    printMessage("축하합니다. 드디어 모기를 잡으셨습니다.")
    game.clear()
}

room1.radio = room1.createObject("radio", "라디오.png")
room1.radio.setWidth(90)
room1.locateObject(room1.radio, 900, 600)
room1.radio.onClick = function() {
    showAudioPlayer("mosquitotencm.wav")
}

////////////////////**room2**////////////////////

room2.door1 = room2.createObject("door1", "문-오른쪽-열림.png")
room2.door1.setWidth(136)
room2.locateObject(room2.door1, 1150, 365)
room2.door1.open()

room2.door1.onClick = function() {
    game.move(room1)
}

room2.door2 = room2.createObject("door2", "문-왼쪽-닫힘.png")
room2.door2.setWidth(115)
room2.locateObject(room2.door2, 100, 365)
room2.door2.lock()

room2.door2.onClick = function() {
    if(room2.door2.isClosed()) {
        room2.door2.open()
    } else if(room2.door2.isOpened()) {
        game.move(room3)
    } else if (room2.door2.isLocked()) {
        printMessage("철커덕")
        room2.door2.unlock()
    }
}

room2.door2.onOpen = function() {
    room2.door2.setSprite("문-왼쪽-열림.png")
}

room2.phone = room2.createObject("phone", "전화기-오른쪽.png")
room2.phone.setWidth(30)
room2.locateObject(room2.phone, 1050, 350)
room2.phone.onClick = function() {
    printMessage("세스코에 전화할까...")
}

room2.desk = room2.createObject("desk", "테이블-오른쪽.png")
room2.desk.setWidth(250)
room2.locateObject(room2.desk, 920, 455)

room2.computer = room2.createObject("computer", "맥-우.png")
room2.computer.setWidth(100)
room2.locateObject(room2.computer, 900, 335)

room2.computer.onClick = function() {
    playYoutube("www.youtube.com/watch?v=d5cV86Sa6k0")
}

room2.sofa = room2.createObject("sofa", "소파-좌.png")
room2.sofa.setWidth(350)
room2.locateObject(room2.sofa, 570, 430)

room2.sofa.onClick = function() {
    printMessage("소파 밑에 숨어있나")
}

room2.bookshelf = room2.createObject("bookshelf", "찬장2-1-닫힘.png")
room2.bookshelf.setWidth(180)
room2.locateObject(room2.bookshelf, 290, 385)

room2.mosquito = room2.createObject("mosquito", "모기.png")
room2.mosquito.setWidth(50)
room2.locateObject(room2.mosquito, 340, 300)

room2.mosquito.hide()

room2.bookshelf.onClick = function() {
    if(room2.bookshelf.isClosed()) {
        room2.bookshelf.open()
    } else if(room2.bookshelf.isOpened()) {
        room2.bookshelf.close()
    } 
}

room2.bookshelf.onOpen = function() {
    room2.bookshelf.setSprite("찬장2-1-닫힘.png")
}

room2.bookshelf.onClose = function() {
    room2.bookshelf.setSprite("찬장2-1-열림.png")
    printMessage("요놈이 어디에 숨었지?")
    if(game.getHandItem() == room3.pesticide){
        printMessage("모기를 발견했다!")
        room2.mosquito.show()
    }
}

room2.mosquito.bedroom = false
room2.mosquito.move = true
var clickCnt = 0;

room2.mosquito.onClick = function() {
    if(clickCnt == 0){
        room2.mosquito.moveY(-100)
        room2.mosquito.moveX(150) //490, 200
        room2.mosquito.move = false
        clickCnt += 1
    } else if(clickCnt == 1) {
        room2.mosquito.move = true
        room2.mosquito.moveY(100)
        room2.mosquito.moveX(150) //640, 300
        room2.mosquito.move = false
        clickCnt += 1
    } else if(clickCnt == 2) {
        room2.mosquito.move = true
        room2.mosquito.moveY(-50)
        room2.mosquito.moveX(150) //790, 250
        room2.mosquito.move = false
        clickCnt += 1
    } else if(clickCnt == 3) {
        room2.mosquito.move = true
        room2.mosquito.moveY(150)
        room2.mosquito.moveX(150) //940, 400
        room2.mosquito.move = false
        clickCnt += 1
    } else if(clickCnt == 4) {
        room2.mosquito.move = true
        room2.mosquito.moveY(-35)
        room2.mosquito.moveX(160) //1100, 365
        room2.mosquito.move = false
        clickCnt += 1
    } else if(clickCnt == 5) {
        room2.mosquito.hide()
        room2.mosquito.bedroom = true
        printMessage("모기가 침실로 들어갔다")
    }
}

room2.postit = room2.createObject("postit", "포스트잇.png")
room2.postit.setWidth(50)
room2.locateObject(room2.postit, 975, 390)

room2.postit.onClick = function() {
    showImageViewer("포스트잍.png", "포스트잍.txt")
}

room2.note = room2.createObject("note", "노트.png")
room2.note.setWidth(100)
room2.locateObject(room2.note, 400, 600)

room2.note.onClick = function() {
    showImageViewer("펼친책.png", "펼친책.txt")
}

password = false
remotcontrolClick = false

room2.leakagebreaker = room2.createObject("leakagebreaker", "leakagebreaker.png")
room2.leakagebreaker.setWidth(50)
room2.locateObject(room2.leakagebreaker, 440, 330)

room2.leakagebreaker.onClick = function() {
    if(!remotcontrolClick) {
        printMessage("두꺼비집이 내려가있네")
    } else {
        printMessage("된장, 두부, 돼지고기, 당근이 각각 몇개 남았더라")
        showKeypad("number", "1215", function(){
            password = true
            printMessage("두꺼비집을 올렸다!")
        })
    }
}

////////////////////***room3***////////////////////

room3.door = room3.createObject("door", "문-오른쪽-열림.png")
room3.door.setWidth(136)
room3.locateObject(room3.door, 1150, 360)
room3.door.open()

room3.door.onClick = function() {
    game.move(room2)
}

room3.setRoomLight(0.5)
bathLight = false

room3.remotControl = room3.createObject("remotControl", "리모컨.png")
room3.remotControl.setWidth(70)
room3.locateObject(room3.remotControl, 900, 600)

room3.remotControl.onClick = function() {
    if(!bathLight) {
        if(!password) {
            printMessage("두꺼비집을 올려야 한다.")
            remotcontrolClick = true
        } else {
            room3.setRoomLight(1)
            bathLight = true
        }
    }
}

room3.cabinet = room3.createObject("cabinet", "찬장-왼쪽-닫힘.png")
room3.cabinet.setWidth(180)
room3.locateObject(room3.cabinet, 480, 220)

room3.pesticide = room3.createObject("pesticide", "에프킬라.png")
room3.pesticide.setWidth(60)
room3.locateObject(room3.pesticide, 485, 195)

room3.pesticide.hide()

room3.pesticide.onClick = function() {
    printMessage("에프킬라 을(를) 주웠다!!")
    room3.pesticide.pick()
}

room3.cabinet.onClick = function() {
    if(!bathLight) {
        printMessage("아무것도 안보여...")
    } else {
        if(room3.cabinet.isClosed()) {
            room3.cabinet.open()
        } else if(room3.cabinet.isOpened()) {
            room3.cabinet.close()
       } 
    }
}

room3.cabinet.onOpen = function() {
    room3.cabinet.setSprite("찬장-왼쪽-닫힘.png")
    room3.pesticide.hide()
}

room3.cabinet.onClose = function() {
    room3.cabinet.setSprite("찬장-왼쪽-열림.png")
    room3.pesticide.show()
}

room3.washstand = room3.createObject("washstand", "washstand.png")
room3.washstand.setWidth(280)
room3.locateObject(room3.washstand, 490, 430)

room3.washstand.onClick = function() {
    if(!bathLight) {
        printMessage("뭔가 익숙한데..?")
    } else {
        printMessage("그래도 손은 닦아야지")
    }
}

room3.tissuehanger = room3.createObject("tissuehanger", "tissuehanger.png")
room3.tissuehanger.setWidth(50)
room3.locateObject(room3.tissuehanger, 800, 400)

room3.tissuehanger.onClick = function() {
    if(!bathLight) {
        printMessage("이게 뭐였더라")
    } else {
        printMessage("휴지좀 갈아야겠다")
    }
}

room3.toilet = room3.createObject("toilet", "toilet.png")
room3.toilet.setWidth(250)
room3.locateObject(room3.toilet, 750, 460)

room3.toilet.onClick = function() {
    if(!bathLight) {
        printMessage("왠 의자가..? (첨벙) 아이고 변기잖아")
    } else {
        printMessage("쏴아아")
    }
}

room3.showerbooth = room3.createObject("showerbooth", "showerbooth.png")
room3.showerbooth.setWidth(600)
room3.locateObject(room3.showerbooth, 180, 360)

room3.showerbooth.onClick = function() {
    if(!bathLight) {
        printMessage("어이쿠 쿵! 이게 뭐여")
    } else {
        printMessage("아까 샤워 했는데 또 해야되나 ㅜㅜ")
    }
}

room3.picture = room3.createObject("picture", "그림1-좌.png")
room3.picture.setWidth(100)
room3.locateObject(room3.picture, 730, 200)

room3.picture.onClick = function() {
    if(!bathLight) {
        printMessage("무슨 그림이였지?")
    } else {
        showImageViewer("opening.png", "opening.txt")
    }
}

game.start(room1)

room1.button = room1.createObject("button", "next.png")
room1.button.setWidth(100)
room1.locateObject(room1.button, 1049, 580)

printMessage("내일은 객지프 시험날... 일찍 자야겠다...(다음 버튼 클릭)")

var buttonClick = 0
room1.button.onClick = function() {
    if(buttonClick == 0){
        printMessage("애애애애ㅐㅐ애앵 (다음 버튼 클릭)")
        buttonClick += 1
    } else if(buttonClick == 1){
        printMessage("아야! 모기땜에 잠을 못자겠네 ㅜㅜ (다음 버튼 클릭)")
        buttonClick += 1
    } else if(buttonClick == 2){
        printMessage("이놈의 모기로부터 탈출하고 싶어!!!! (다음 버튼 클릭)")
        buttonClick += 1
    } else if(buttonClick == 3){
        printMessage("숨겨져 있는 에프킬라를 찾아 모기를 잡아주세요")
        room1.button.hide()
    }
}