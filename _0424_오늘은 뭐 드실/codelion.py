import random
import time

lunch = ["짜장면","돈까스","파스타","김치찌개"]

while True:
    print(lunch)
    item = input("추가할 메뉴를 입력하세요 : ")
    if (item == "q"):
        break
    else:
        lunch.append(item)

set_lunch = set(lunch)

while True:
    print(set_lunch)
    item = input("삭제할 메뉴를 입력하세요 : ")
    if (item == "q"):
        break
    else:
        set_lunch = set_lunch - set([item])

print("5초 후 랜덤으로 메뉴를 선택하여 출력합니다.")
print("5")
time.sleep(1)
print("4")
time.sleep(1)
print("3")
time.sleep(1)
print("2")
time.sleep(1)
print("1")
time.sleep(1)
print(random.choice(list(set_lunch)))
