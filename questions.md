q1. count ใน increment() อ้างอิงถึงตัวแปรตัวไหน? ทำไม?
ans. count ในฟังชัน increment เพราะว่ามีการประกาศ var ไว้ ซึ่งสามารถอยู่ใน scope ได้
q2. ถ้าลบ var count = 10; ออกจาก makeCounter() จะเกิดอะไรขึ้น?
ans. จะไปใช้ count ที่อยู่ข้างนอก ที่ประกาศไว้คือ var count = 0
q3. var count = 0; บรรทัดแรกสุดถูก hoist ยังไง?
ans. ถูก hoist เป็น undefined จากนั้น assign เป็น 0
