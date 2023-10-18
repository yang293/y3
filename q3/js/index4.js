//1、获取元素
var txt = document.querySelector("textarea");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");		
//2、给button绑定点击事件
btn.onclick = function () {
	if (txt.value == "") {//当文本框中没有文字时，提示
		alert("您没有输入内容")
	} else {
		//创建元素li作为留言区
		var li = document.createElement("li");
		//将文本框中的内容放到li中,a标签中href中的内容代表什么都不执行
		li.innerHTML = txt.value + "<a href='javascript:;'>删除</a>"
		//添加之后文本框的内容清空
		txt.value = "";
		//将留言添加到ul中，而且在最上方
		ul.insertBefore(li, ul.children[0]);
		//当点击删除时删除ul中的li
		var as = document.querySelectorAll("a");
		//循环给每个删除绑定事件
		for (var i = 0; i < as.length; i++) {
			as[i].onclick = function () {
				//删除当前a标签所在位置的父节点li
				ul.removeChild(this.parentNode);
			}
		}
	}
}
	
		