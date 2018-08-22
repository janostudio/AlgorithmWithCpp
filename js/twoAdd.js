// js写一个链表，new后，返回的是一个对象的内存地址
// 链表

function LinkedList() {
  var head = null;
  var Node = function(element) {
      this.element = element;
      this.next = null;
  };
  // 从链表尾部添加元素
  this.append = function(element) {
    var node = new Node(element), //传入值创建Node项
        current;
  
    if(head === null) { //如果为空链表
        head = node; //设置node为head（head为第一个节点的引用）
    } else {
        current = head; //从表头开始
        while(current.next) { 
            //循环列表，找到最后一项（列表最后一个节点的下一个元素始终是null）
            current = current.next;
        }
        //使当前最后一项的指针指向node
        current.next = node;
    }
    length++; //更新列表长度
  };
  // 从特定位置删除元素
  this.removeAt = function(position) {
    if(position > -1 && position < length) { //有效性检测
        var current = head, //用current来循环列表
        previous,
        index = 0;

        if(position === 0) {
            head = current.next; //移除第一个元素，直接把head指向下一个元素
        } else {
            while(index++ < position) { //循环列表找到满足条件的那个元素
                previous = current; //
                current = current.next; //把下一个变量覆给current
            }
            //跳过current，将当前要移除的元素的上一个与下一项直接连接起来。
            previous.next = current.next;
        }
        length --;
        return current.element;
    } else {
        return null;
    }
  }
  // 在指定位置插入一个元素
  this.insert = function (position, element) {
    if(position >= 0 && position <= length) {
        var node = new Node(element),
            current = head; //通过current从head位置开始迭代
            previous,
            index = 0;

        if(position === 0) { //第一个位置
            node.next = current; //此时current = head,指向head那么node就成了第一个
            head = node; //node指向为head
        } else {
            while (index++ < position ) { //循环迭代到目标位置
                previous = current; 
                current = current.next;
            }

            node.next = current; // node的下一个为current
            previous.next = node; // node的上一个位置为previous
        }
        length++;
        return true;
    } else {
        return false;
    }
  }
  // 把LinkedList对象转换成一个字符串。
  this.toString = function() {
    var current = head,
        string = '';
    while(current) { //循环访问列表
        string += current.element + (current.next ? '\n' : '');
        current = current.next;
    }
    return string; //返回字符串
  }
  // 返回元素的位置
  this.indexOf = function(element) {
    var current = head,
        index = 0;
    while(current) {
        if(element === current.element) {
            return index; //找到返回当前位置
        }
        index ++;
        current = current.next;
    }
    return -1;    //找不到返回-1
  }
  // 输入元素，移除该元素
  this.remove = function(element) {
    var index = this.indexOf(element); //得到元素的位置
    return this.removeAt(index); //移除该元素
  }
  // 判断是否为空 得到长度 得到第一个元素
  this.isEmpty = function () {
      return length === 0;
  }

  this.size = function () {
      return length;
  }

  this.getHead = function () {
      return head;
  }
}

// https://segmentfault.com/a/1190000008706650
// 写一个列表类，生成两个实例
var addTwoNumbers = function(l1, l2) {
  function LinkedList() {
    var head = null;
    var Node = function(element) {
        this.element = element;
        this.next = null;
    };
    // 从链表尾部添加元素
    this.append = function(element) {
      var node = new Node(element), //传入值创建Node项
          current;
      if(head === null) { //如果为空链表
          head = node; //设置node为head（head为第一个节点的引用）
      } else {
          current = head; //从表头开始
          while(current.next) { 
              //循环列表，找到最后一项（列表最后一个节点的下一个元素始终是null）
              current = current.next;
          }
          //使当前最后一项的指针指向node
          current.next = node;
      }
      length++; //更新列表长度
    };
    // 把LinkedList对象转换成一个字符串。
    this.toString = function() {
      var current = head,
          string = '';
      while(current) { //循环访问列表
          string += current.element + (current.next ? '\n' : '');
          current = current.next;
      }
      return string; //返回字符串
    }
  }
  
  for(let i=0;i<l1.length;i++) {
    LinkedList
  }

};