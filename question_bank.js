
const questionBank = {
    // 选择题题库 - 525道
    multipleChoice: [
        // 第一套题
  {
    "id": 1,
    "question": "下列哪个软件不能运行 Python 程序？",
    "options": [
      "JupyterNotebook",
      "Pycharm",
      "原版的Scratch",
      "IDLE"
    ],
    "answer": "原版的Scratch"
  },    // 第一套题1
  {
    "id": 6,
    "question": "下面print语句，哪一个是正确的用法？",
    "options": [
      "print 龙腾虎跃",
      "print(龙腾虎跃)",
      "print(‘龙腾虎跃’)",
      "print’龙腾虎跃’"
    ],
    "answer": "print(‘龙腾虎跃’)"
  },    // 第一套题2
  {
    "id": 7,
    "question": "在Python中，下列哪一条语句可以改变画笔当前位置？",
    "options": [
      "dot(100)",
      "setheading(100)",
      "left(100)",
      "goto(100,0)"
    ],
    "answer": "goto(100,0)"
  },    // 第一套题3
  {
    "id": 8,
    "question": "下列哪一个可以进行数学中的求余数的运算？",
    "options": [
      "**",
      "%",
      "/",
      "//"
    ],
    "answer": "%"
  },    // 第一套题4
  {
    "id": 9,
    "question": "15>=8的运算结果是什么？",
    "options": [
      "15",
      "8",
      "False",
      "True"
    ],
    "answer": "True"
  },    // 第一套题5
  {
    "id": 10,
    "question": "在Python中，缩进是用来表示代码块的层级关系的，可以通过使用空格来缩进代码，每增加一个层块，就增加几个缩进？",
    "options": [
      "半个",
      "一个",
      "一个半",
      "任意个都可以"
    ],
    "answer": "一个"
  },    // 第一套题6
  {
    "id": 11,
    "question": "小新同学想要使用Python程序来计算本次班级捐款的总费用，于是他先定义了一个用来保存总额的变量，以下正确的定义是？",
    "options": [
      "num",
      "else",
      "in",
      "and"
    ],
    "answer": "num"
  },    // 第一套题7
  {
    "id": 12,
    "question": "下列图形可能是哪段代码执行后的结果？",
    "options": [
      "import turtle\nturtle.shape(\"turtle\")\nturtle.forward(120)\nturtle.right(90)",
      "import turtle\nturtle.shape(\"turtle\")\nturtle.forward(120)\nturtle.right(-90)",
      "import turtle\nturtle.shape(\"turtle\")\nturtle.forward(120)\nturtle.right(180)",
      "import turtle\nturtle.shape(\"turtle\")\nturtle.forward(120)\nturtle.right(-180)"
    ],
    "answer": "import turtle\nturtle.shape(\"turtle\")\nturtle.forward(120)\nturtle.right(90)"
  },    // 第一套题8
  {
    "id": 13,
    "question": "已知a=6,b=3,print(a%b)的结果是？",
    "options": [
      "2",
      "2.0",
      "0",
      "0.0"
    ],
    "answer": "0"
  },    // 第一套题9
  {
    "id": 14,
    "question": "下列选项中，两个运算符运算优先级相同的是？",
    "options": [
      "()和**",
      "/和%",
      "not和>",
      "-和<="
    ],
    "answer": "/和%"
  },    // 第一套题10
  {
    "id": 15,
    "question": "已知以下程序，请问输出结果是？\na=int(6.8)\nb=float(7)\na=a+b\n    print(a,b)",
    "options": [
      "14 7.0",
      "14.0 7.0",
      "13.0 7.0",
      "13.0 7"
    ],
    "answer": "13.0 7.0"
  },    // 第一套题11
  {
    "id": 16,
    "question": "小明想要使用指令circle(100),绘制一个圆形，从坐标原点出发，绘制完成后，画笔最后的坐标是？",
    "options": [
      "(0,0)",
      "(100,0)",
      "(0,100)",
      "(0,-100)"
    ],
    "answer": "(0,0)"
  },    // 第一套题12
  {
    "id": 17,
    "question": "已知运算式 2+16/(2+2)**2,请问最先运算的是哪一部分？",
    "options": [
      "括号内",
      "除法",
      "加法",
      "乘方"
    ],
    "answer": "括号内"
  },    // 第一套题13
  {
    "id": 18,
    "question": "小明手里有20个乒乓球，一个盒子最多可以放3个，请问以下运算哪个可以帮助小明计算出至少需要多少个盒子？",
    "options": [
      "20/3+1",
      "20%3",
      "20//3",
      "20//3+1"
    ],
    "answer": "20//3+1"
  },    // 第一套题14
  {
    "id": 19,
    "question": "小明同学自从学习Python语言的Turtle画图后，喜欢上了用程序作画，今天他想程序运行一开始画布就全屏显示，那么应该怎么设置画布的大小和位置？",
    "options": [
      "turtle.setup(0,0)",
      "turtle.setup(‘100%’,‘100%’,0,0)",
      "turtle.setup(1.0,1.0)",
      "turtle.setup(100,100,0,0)"
    ],
    "answer": "turtle.setup(1.0,1.0)"
  },    // 第一套题15
  {
    "id": 20,
    "question": "int(100.5)的结果是？",
    "options": [
      "101",
      "100.5",
      "100.0",
      "100"
    ],
    "answer": "100"
  },    // 第一套题16
  {
    "id": 21,
    "question": "“爷爷，您今年多少岁了？” 小明问，爷爷想考考小明，于是告诉他：“我现在的年龄加上18，除以6，减去5，最后乘以10，恰巧是100岁。”你知道小明的爷爷今年多少岁？",
    "options": [
      "68",
      "70",
      "72",
      "78"
    ],
    "answer": "72"
  },    // 第一套题17
  {
    "id": 22,
    "question": "下列哪个语句可以将字符串\"10\"与数字2相加得到整数12？",
    "options": [
      "result = “10” + 2",
      "result = int(“10”) + 2",
      "result = str(10) + 2",
      "result = “10” + str(2)"
    ],
    "answer": "result = int(“10”) + 2"
  },    // 第一套题18
  {
    "id": 23,
    "question": "以下哪个命令是让turtle向前移动100个单位？",
    "options": [
      "turtle.move(100)",
      "turtle.forward(100)",
      "turtle.go(100)",
      "turtle.advance(100)"
    ],
    "answer": "turtle.forward(100)"
  },    // 第一套题19
  {
    "id": 24,
    "question": "下面哪个是右转90°的正确命令？",
    "options": [
      "forward(90)",
      "left(90)",
      "right(90)",
      "bakeward(90)"
    ],
    "answer": "right(90)"
  },    // 第一套题20
  {
    "id": 25,
    "question": "执行代码 name = input(‘请输入姓名：’)，并输入张三，那么变量name中存放的是？",
    "options": [
      "请输入姓名：",
      "张三",
      "请输入姓名：张三",
      "张三请输入姓名："
    ],
    "answer": "张三"
  },    // 第一套题21
  {
    "id": 26,
    "question": "以下哪个语句可以实现只修改画笔颜色为绿色？",
    "options": [
      "turtle.screenbackground(‘green’)",
      "turtle.bgcolor(‘green’)",
      "turtle.color(‘green’)",
      "turtle.pencolor(‘green’)"
    ],
    "answer": "turtle.pencolor(‘green’)"
  },    // 第一套题22
  {
    "id": 27,
    "question": "a=2+int(‘2’)，变量 a 的值为？",
    "options": [
      "4",
      "2",
      "8",
      "程序无法运行，提示错误"
    ],
    "answer": "4"
  },    // 第一套题23
  {
    "id": 28,
    "question": "运行代码\nprint('4*9=')\nprint(36)\n\n的结果是以下哪一项？",
    "options": [
      "4*9=\n36",
      "4*9",
      "36",
      "4*9=,36"
    ],
    "answer": "4*9=\n36"
  },    // 第一套题24
  {
    "id": 29,
    "question": "以下哪一个是Python文件？",
    "options": [
      "dragon.sb3",
      "dragon.cpp",
      "dragon.idle",
      "dragon.py"
    ],
    "answer": "dragon.py"
  },    // 第一套题25


        // 更多选择题...
        // 实际使用时，请在这里添加525道选择题
    ],


    // 判断题题库 - 210道
    trueFalse: [
        // 第1题
  {
    "id": 30,
    "question": "input 语句获得的数字是整数类型。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },
  {
    "id": 31,
    "question": "在Python中，IDLE有两种模式，分别是交互模式和脚本模式。其中，脚本模式是最为便捷的一种模式，直接输入一行代码或者命令，立刻就可以反馈运行结果。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },
  {
    "id": 32,
    "question": "turtle.color(“green”,“yellow”)与turtle.fillcolor(“yellow”)设置的画笔填充颜色相同。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确"
  },
  {
    "id": 33,
    "question": "变量和常量的区别在于，在程序运行过程中，变量的值是可以发生变化的量，而常量是不发生变化的量。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确"
  },
  {
    "id": 34,
    "question": "Turtle库中画布的大小和图形化的舞台区一样，都是固定大小的，长是480，宽是360。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },
  {
    "id": 35,
    "question": "Python中，成对使用的单引号或双引号包围的字符串是完全相同的。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "正确"
  },
  {
    "id": 36,
    "question": "安装完Python开发环境后必须再单独安装IDLE，才能使用IDLE编写代码。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },
  {
    "id": 37,
    "question": "可以使用int()将字符串类型的’3.14’转换为整数类型的3。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },
  {
    "id": 38,
    "question": "运行代码print(int(3.9999))，输出的结果是4。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },
  {
    "id": 39,
    "question": "设置变量a=input(‘请输入一个整数’)，输入整数5，变量a的数据类型为int。",
    "options": [
      "正确",
      "错误"
    ],
    "answer": "错误"
  },




        // 更多判断题...
        // 实际使用时，请在这里添加210道判断题
    ]
};


    // 测试输出，确保题库加载成功
console.log("选择题数量:", questionBank.multipleChoice.length);
console.log("判断题数量:", questionBank.trueFalse.length);