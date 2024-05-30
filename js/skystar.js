// poem
var words=[
    '希君生羽翼,一化北溟鱼',
    '我觉君非池中物',
    '咫尺蛟龙云雨',
    '得意犹堪夸世俗',
    '诏黄新湿自如鸦',
    '此去提衡霄汉上',
    '鹏抟鲲运更论程',
    '十年寒窗无人问',
    '一举成名天下知',
    '桃花直透三层浪',
    '桂子高攀第一枝',
    '纵有千古,横有八方',
    '前途似海,来日方长',
    '关关难过关关过',
    '前路漫漫亦灿灿',
    '知君志不小,一举凌鸿鹄',
    '桐花万里丹山路',
    '雏凤清于老凤声',
    '恣意策马扬帆',
    '最爱云开雾散',
    '又踏层峰辟新天',
    '更扬云帆立潮头',
    '心中若能容丘壑',
    '下笔方能汇山河',
    '业无高卑志当坚持',
    '男儿有求安得闲',
    '鹰击天风壮,鹏飞海浪春',
    '花开堪折直须折',
    '莫待无花空折枝',
    '愿君移向长林间',
    '他日将来作梁栋',
    '霜蹄千里骏,风翮九霄鹏',
    '摩霄志在潜修羽',
    '会接鸾凰别苇丛',
    '追风赶月莫停留',
    '平芜尽处是春山',
    '明年此日青云去',
    '却笑人间举子忙',
    '他日卧龙终得雨',
    '今朝放鹤且冲天',
    '丹墀对策三千字',
    '金榜题名五色春',
    '愿祝君如此山水',
    '滔滔岌岌风云起',
    '骊珠难隐耀,皋鹤会长鸣',
    '折桂一枝先许我',
    '杨穿三叶尽惊人',
    '少年何妨梦摘星',
    '敢挽弯弓射玉衡',
    '鹏北海,凤朝阳,又携书剑路茫茫',
    '时人不识凌云木',
    '直待凌云始道高',
    '愿君有心如明月',
    '漫洒清辉润山河',
    '少年心事当拏云',
    '谁念幽寒坐呜呃',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '今朝仗剑破红尘',
    '明日诗酒笑平生',
    '鸿鹄去万里,温酒待君归',
    '纵使清明无雨色',
    '入云深处亦沾衣'

]
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '追风赶月莫停留,平芜尽处是春山';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },0)
      setTimeout(function(){
          textone.innerHTML = '辞暮尔尔,烟火年年';
          texttwo.innerHTML = '愿君长乐,岁月静好';
      },15000)
      setTimeout(function () { 
          textone.innerHTML = '长歌有和,独行有灯';
          texttwo.innerHTML = '星河长明,岁月长安';
      },30000)
      setTimeout(function () {
         textone.innerHTML = '霁月风光,不萦于怀';
         texttwo.innerHTML = '时光知味,岁月沉香';
      },45000)
     setTimeout(function () {
         textone.innerHTML = '莫愁千里路,自有到来风';
         texttwo.innerHTML = '追光的人,终会光芒万丈';
      },70000)
     setTimeout(function () {
         textone.innerHTML = '恰似人间惊鸿客,墨染星辰云水间';
         texttwo.innerHTML = '要等时间嘉许,等春风得意';
     },950000)
     setTimeout(function () {
        textone.innerHTML = '希望你继续兴致盎然地与世界交手';
        texttwo.innerHTML = '一直走在开满鲜花的路上';
        textthree.innerHTML = '2024,高考加油!';
    }, 1200000)
