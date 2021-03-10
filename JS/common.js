$(function() {//ここはお約束！
	$('#bb-bookblock').bookblock();
});//ここはお約束！


$('#bb-bookblock').bookblock({
	orientation: 'vertical',//「vertical」は水平方向、「horizontal」は垂直方法にめくれる
	direction: 'rtl',//「ltr (left to right)」は左から右、「rtl (right to left)」は右から左にめくれる
	speed: 1000,//ページのめくれるスピード
	easing: 'ease-in-out',//animation-timing-functionプロパティの値を入れる「ease-in-out」はゆっくり始まって、ゆっくり終わる
	shadows: true,//「true」にしているとページをめくるときも前の画像が残映として残る。「false」にすると白くなってかっこよくない。
	shadowSides: 0.2,//めくる時のめくっているページが上にあるときの両側のopacityを「0.1~1」で設定できる。実際値変えても目視で違いがわからない。
	shadowFlip: 0.1,//めくっている時のめくっているページの影のopacityを「0.1~1」で設定できる。これまた目視で違いがわからん。
	circular: false,//ページが最後に来ても、次ボタンで最初につながるようにするか(ループするか)どうか
	nextEl: '',//次にいくボタンのidを増やしたいときなどに値を入れる。例えば、「#bb-nav-next-demo」と入れると「<a id="bb-nav-next-demo" href="#"></a>」も次ボタンになる。
	prevEl: '',//「nextEl」の前ボタンバージョン
	autoplay: false,//「true」だと自動でページがめくれていく
	interval: 3000,//「autoplay」がtrueのとき、ページがめくれる間隔を設定できる。
	//ページがめくれた「後」に発火する
	onEndFlip: function(page, isLimit) {
		//「page」はさっきめくれたやつのアイテムのインデックス(index()のやつ)
		//「isLimit」はよくわかんないけど「page」の値に１足したやつ
		return false;
	},
	//ページがめくれる「前」に発火する
	onBeforeFlip: function(page) {
		//「page」はさっきめくれたやつのアイテムのインデックス(index()のやつ)
		// 上と違うのは、めくれる「前」に発火するから最後のページのインデックスも「page」で取れる
		return false;
	}
});



//「#bb-nav-next」がクリックされたら、、、
$( '#bb-nav-next' ).on( 'click', function() {
	//「#bb-blocblock」が次のページになる
	$('#bb-bookblock').bookblock('next');
	// 出る
	return false;
});
//「#bb-nav-prev」がクリックされたら、、、
$('#bb-nav-prev').on( 'click', function() {
	//「#bb-blocblock」が前のページになる
	$( '#bb-bookblock' ).bookblock('prev');
	// 出る
	return false;
});
//「#bb-nav-first」がクリックされたら、、、
$('#bb-nav-first').on( 'click', function() {
	//「#bb-blocblock」が最初のページになる
	$( '#bb-bookblock' ).bookblock('first');
	// 出る
	return false;
});
//「#bb-nav-last」がクリックされたら、、、
$('#bb-nav-last').on( 'click', function() {
	//「#bb-blocblock」が最後のページになる
	$( '#bb-bookblock' ).bookblock('last');
	// 出る
	return false;
});



$(window).fadeThis();