import{s as O,q as G,n as E,r as N,o as Q,v as M,w as L,f as U}from"../chunks/scheduler.NK3U3WA8.js";import{S as J,i as V,e as x,s as S,c as _,a as A,f as T,d as D,m as C,n as I,g as R,h as z,o as X,x as Z,t as ee,b as te,j as oe}from"../chunks/index.DFRbstav.js";import{e as Y}from"../chunks/each.AC3BWejJ.js";import{g as ae}from"../chunks/_commonjsHelpers.CqkleIqs.js";import{w as j}from"../chunks/paths.mjupksgW.js";import{p as se,i as ie,a as ne}from"../chunks/entry.I-O-P8w8.js";var k={};k.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];k.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];k.elizaQuits=["bye","goodbye","done","exit","quit"];k.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];k.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];k.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};k.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];k.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var s=k;function g(t){this.noRandom=!!t,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}g.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var t=0;t<s.elizaKeywords.length;t++){this.lastchoice[t]=[];for(var e=s.elizaKeywords[t][2],o=0;o<e.length;o++)this.lastchoice[t][o]=-1}};g.prototype._dataParsed=!1;g.prototype._init=function(){var t={};if(s.elizaSynons&&typeof s.elizaSynons=="object")for(var e in s.elizaSynons)t[e]="("+e+"|"+s.elizaSynons[e].join("|")+")";(!s.elizaKeywords||typeof s.elizaKeywords.length>"u")&&(s.elizaKeywords=[["###",0,[["###",[]]]]]);for(var o=/@(\S+)/,l=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,f=/(\S)\s*\*\s*$/,c=/^\s*\*\s*$/,m=/\s+/g,n=0;n<s.elizaKeywords.length;n++){var p=s.elizaKeywords[n][2];s.elizaKeywords[n][3]=n;for(var e=0;e<p.length;e++){var h=p[e];if(h[0].charAt(0)=="$"){for(var w=1;h[0].charAt[w]==" ";)w++;h[0]=h[0].substring(w),h[2]=!0}else h[2]=!1;for(var i=o.exec(h[0]);i;){var b=t[i[1]]?t[i[1]]:i[1];h[0]=h[0].substring(0,i.index)+b+h[0].substring(i.index+i[0].length),i=o.exec(h[0])}if(c.test(h[0]))h[0]="\\s*(.*)\\s*";else{if(i=l.exec(h[0]),i){for(var r="",d=h[0];i;)r+=d.substring(0,i.index+1),i[1]!=")"&&(r+="\\b"),r+="\\s*(.*)\\s*",i[2]!="("&&i[2]!="\\"&&(r+="\\b"),r+=i[2],d=d.substring(i.index+i[0].length),i=l.exec(d);h[0]=r+d}if(i=a.exec(h[0]),i){var r="\\s*(.*)\\s*";i[1]!=")"&&i[1]!="\\"&&(r+="\\b"),h[0]=r+h[0].substring(i.index-1+i[0].length)}if(i=f.exec(h[0]),i){var r=h[0].substring(0,i.index+1);i[1]!="("&&(r+="\\b"),h[0]=r+"\\s*(.*)\\s*"}}h[0]=h[0].replace(m,"\\s+"),m.lastIndex=0}}if(s.elizaKeywords.sort(this._sortKeywords),g.prototype.pres={},g.prototype.posts={},s.elizaPres&&s.elizaPres.length){for(var u=new Array,e=0;e<s.elizaPres.length;e+=2)u.push(s.elizaPres[e]),g.prototype.pres[s.elizaPres[e]]=s.elizaPres[e+1];g.prototype.preExp=new RegExp("\\b("+u.join("|")+")\\b")}else g.prototype.preExp=/####/,g.prototype.pres["####"]="####";if(s.elizaPosts&&s.elizaPosts.length){for(var u=new Array,e=0;e<s.elizaPosts.length;e+=2)u.push(s.elizaPosts[e]),g.prototype.posts[s.elizaPosts[e]]=s.elizaPosts[e+1];g.prototype.postExp=new RegExp("\\b("+u.join("|")+")\\b")}else g.prototype.postExp=/####/,g.prototype.posts["####"]="####";(!s.elizaQuits||typeof s.elizaQuits.length>"u")&&(s.elizaQuits=[]),g.prototype._dataParsed=!0};g.prototype._sortKeywords=function(t,e){return t[1]>e[1]?-1:t[1]<e[1]||t[3]>e[3]?1:t[3]<e[3]?-1:0};g.prototype.transform=function(t){var e="";this.quit=!1,t=t.toLowerCase(),t=t.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),t=t.replace(/\s+-+\s+/g,"."),t=t.replace(/\s*[,\.\?!;]+\s*/g,"."),t=t.replace(/\s*\bbut\b\s*/g,"."),t=t.replace(/\s{2,}/g," ");for(var o=t.split("."),l=0;l<o.length;l++){var a=o[l];if(a!=""){for(var f=0;f<s.elizaQuits.length;f++)if(s.elizaQuits[f]==a)return this.quit=!0,this.getFinal();var c=this.preExp.exec(a);if(c){for(var m="",n=a;c;)m+=n.substring(0,c.index)+this.pres[c[1]],n=n.substring(c.index+c[0].length),c=this.preExp.exec(n);a=m+n}this.sentence=a;for(var p=0;p<s.elizaKeywords.length;p++)if(a.search(new RegExp("\\b"+s.elizaKeywords[p][0]+"\\b","i"))>=0&&(e=this._execRule(p)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var p=this._getRuleIndexByKey("xnone");p>=0&&(e=this._execRule(p))}return e!=""?e:"I am at a loss for words."};g.prototype._execRule=function(t){for(var e=s.elizaKeywords[t],o=e[2],l=/\(([0-9]+)\)/,a=0;a<o.length;a++){var f=this.sentence.match(o[a][0]);if(f!=null){var c=o[a][1],m=o[a][2],n=this.noRandom?0:Math.floor(Math.random()*c.length);this.noRandom&&this.lastchoice[t][a]>n||this.lastchoice[t][a]==n?(n=++this.lastchoice[t][a],n>=c.length&&(n=0,this.lastchoice[t][a]=-1)):this.lastchoice[t][a]=n;var p=c[n];if(this.debug&&alert(`match:
key: `+s.elizaKeywords[t][0]+`
rank: `+s.elizaKeywords[t][1]+`
decomp: `+o[a][0]+`
reasmb: `+p+`
memflag: `+m),p.search("^goto ","i")==0){var h=this._getRuleIndexByKey(p.substring(5));if(h>=0)return this._execRule(h)}var w=l.exec(p);if(w){for(var i="",b=p;w;){var r=f[parseInt(w[1])],d=this.postExp.exec(r);if(d){for(var u="",y=r;d;)u+=y.substring(0,d.index)+this.posts[d[1]],y=y.substring(d.index+d[0].length),d=this.postExp.exec(y);r=u+y}i+=b.substring(0,w.index)+r,b=b.substring(w.index+w[0].length),w=l.exec(b)}p=i+b}if(p=this._postTransform(p),m)this._memSave(p);else return p}}return""};g.prototype._postTransform=function(t){if(t=t.replace(/\s{2,}/g," "),t=t.replace(/\s+\./g,"."),s.elizaPostTransforms&&s.elizaPostTransforms.length)for(var e=0;e<s.elizaPostTransforms.length;e+=2)t=t.replace(s.elizaPostTransforms[e],s.elizaPostTransforms[e+1]),s.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var o=/^([a-z])/,l=o.exec(t);l&&(t=l[0].toUpperCase()+t.substring(1))}return t};g.prototype._getRuleIndexByKey=function(t){for(var e=0;e<s.elizaKeywords.length;e++)if(s.elizaKeywords[e][0]==t)return e;return-1};g.prototype._memSave=function(t){this.mem.push(t),this.mem.length>this.memSize&&this.mem.shift()};g.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var t=Math.floor(Math.random()*this.mem.length),e=this.mem[t],o=t+1;o<this.mem.length;o++)this.mem[o-1]=this.mem[o];return this.mem.length--,e}else return""};g.prototype.getFinal=function(){return s.elizaFinals?s.elizaFinals[Math.floor(Math.random()*s.elizaFinals.length)]:""};g.prototype.getInitial=function(){return s.elizaInitials?s.elizaInitials[Math.floor(Math.random()*s.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(t){return this[this.length]=t});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var t=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,t});var re=g;const le=ae(re);function ue(t){const e=JSON.parse(t);return e.data&&(e.data=se(e.data)),e}function H(t){return HTMLElement.prototype.cloneNode.call(t)}function he(t,e=()=>{}){const o=async({action:a,result:f,reset:c=!0,invalidateAll:m=!0})=>{f.type==="success"&&(c&&HTMLFormElement.prototype.reset.call(t),m&&await ie()),(location.origin+location.pathname===a.origin+a.pathname||f.type==="redirect"||f.type==="error")&&ne(f)};async function l(a){var d,u,y,W,P;if(((d=a.submitter)!=null&&d.hasAttribute("formmethod")?a.submitter.formMethod:H(t).method)!=="post")return;a.preventDefault();const c=new URL((u=a.submitter)!=null&&u.hasAttribute("formaction")?a.submitter.formAction:H(t).action),m=(y=a.submitter)!=null&&y.hasAttribute("formenctype")?a.submitter.formEnctype:H(t).enctype,n=new FormData(t),p=(W=a.submitter)==null?void 0:W.getAttribute("name");p&&n.append(p,((P=a.submitter)==null?void 0:P.getAttribute("value"))??"");const h=new AbortController;let w=!1;const b=await e({action:c,cancel:()=>w=!0,controller:h,formData:n,formElement:t,submitter:a.submitter})??o;if(w)return;let r;try{const v=new Headers({accept:"application/json","x-sveltekit-action":"true"});m!=="multipart/form-data"&&v.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(m)?m:"application/x-www-form-urlencoded");const B=m==="multipart/form-data"?n:new URLSearchParams(n),K=await fetch(c,{method:"POST",headers:v,cache:"no-store",body:B,signal:h.signal});r=ue(await K.text()),r.type==="error"&&(r.status=K.status)}catch(v){if((v==null?void 0:v.name)==="AbortError")return;r={type:"error",error:v}}b({action:c,formData:n,formElement:t,update:v=>o({action:c,result:r,reset:v==null?void 0:v.reset,invalidateAll:v==null?void 0:v.invalidateAll}),result:r})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",l),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",l)}}}function q(t,e,o){const l=t.slice();return l[9]=e[o],l}function F(t){let e,o,l=t[9].message+"",a,f;return{c(){e=x("article"),o=x("p"),a=ee(l),this.h()},l(c){e=_(c,"ARTICLE",{class:!0});var m=A(e);o=_(m,"P",{});var n=A(o);a=te(n,l),n.forEach(D),m.forEach(D),this.h()},h(){I(e,"class",f=M(t[9].user)+" svelte-b04f3w")},m(c,m){R(c,e,m),z(e,o),z(o,a)},p(c,m){m&4&&l!==(l=c[9].message+"")&&oe(a,l),m&4&&f!==(f=M(c[9].user)+" svelte-b04f3w")&&I(e,"class",f)},d(c){c&&D(e)}}}function $(t){let e,o='<span class="circle svelte-b04f3w"></span> <span class="circle svelte-b04f3w"></span> <span class="circle svelte-b04f3w"></span>';return{c(){e=x("article"),e.innerHTML=o,this.h()},l(l){e=_(l,"ARTICLE",{id:!0,class:!0,"data-svelte-h":!0}),C(e)!=="svelte-1ixtjr6"&&(e.innerHTML=o),this.h()},h(){I(e,"id","visible"),I(e,"class","svelte-b04f3w")},m(l,a){R(l,e,a)},d(l){l&&D(e)}}}function ye(t){let e,o,l,a,f,c='<input type="text" name="text" placeholder="Skriv ett meddelande" required="" class="svelte-b04f3w"/> <button type="submit" id="submit" class="svelte-b04f3w">Skicka</button>',m,n,p="Rensa chatten",h,w,i=Y(t[2]),b=[];for(let d=0;d<i.length;d+=1)b[d]=F(q(t,i,d));let r=t[3]&&$();return{c(){e=x("main"),o=x("section");for(let d=0;d<b.length;d+=1)b[d].c();l=S(),r&&r.c(),a=S(),f=x("form"),f.innerHTML=c,m=S(),n=x("button"),n.textContent=p,this.h()},l(d){e=_(d,"MAIN",{class:!0});var u=A(e);o=_(u,"SECTION",{class:!0});var y=A(o);for(let W=0;W<b.length;W+=1)b[W].l(y);l=T(y),r&&r.l(y),y.forEach(D),a=T(u),f=_(u,"FORM",{method:!0,class:!0,"data-svelte-h":!0}),C(f)!=="svelte-qajuq9"&&(f.innerHTML=c),m=T(u),n=_(u,"BUTTON",{type:!0,id:!0,class:!0,"data-svelte-h":!0}),C(n)!=="svelte-18fa4p1"&&(n.textContent=p),u.forEach(D),this.h()},h(){I(o,"class","svelte-b04f3w"),I(f,"method","post"),I(f,"class","svelte-b04f3w"),I(n,"type","button"),I(n,"id","clear"),I(n,"class","svelte-b04f3w"),I(e,"class","svelte-b04f3w")},m(d,u){R(d,e,u),z(e,o);for(let y=0;y<b.length;y+=1)b[y]&&b[y].m(o,null);z(o,l),r&&r.m(o,null),z(e,a),z(e,f),z(e,m),z(e,n),h||(w=[G(he.call(null,f,t[5])),X(n,"click",t[6])],h=!0)},p(d,[u]){if(u&4){i=Y(d[2]);let y;for(y=0;y<i.length;y+=1){const W=q(d,i,y);b[y]?b[y].p(W,u):(b[y]=F(W),b[y].c(),b[y].m(o,l))}for(;y<b.length;y+=1)b[y].d(1);b.length=i.length}d[3]?r||(r=$(),r.c(),r.m(o,null)):r&&(r.d(1),r=null)},i:E,o:E,d(d){d&&D(e),Z(b,d),r&&r.d(),h=!1,N(w)}}}function de(t,e,o){let l,a=E,f=()=>(a(),a=L(w,u=>o(2,l=u)),w),c,m=E,n=()=>(m(),m=L(i,u=>o(3,c=u)),i);t.$$.on_destroy.push(()=>a()),t.$$.on_destroy.push(()=>m());const p=new le;var h=[];Q(()=>{h=JSON.parse(localStorage.getItem("chat"))||[{user:"Eliza",message:p.getInitial()}],U(w,l=h,l),console.log(h),w.subscribe(u=>{localStorage.setItem("chat",JSON.stringify(u))})});let{chat:w=j(h)}=e;f();let{visible:i=j(!1)}=e;n();async function b(u){u&&(i.set(!0),w.update(y=>[...y,{user:"User",message:u}]),await new Promise(y=>setTimeout(y,1e3+Math.random()*1e3)),w.update(y=>[...y,{user:"Eliza",message:p.transform(u)}]),i.set(!1))}const r=({formElement:u,formData:y,cancel:W})=>{W();const P=y.get("text");b(P),u.reset()},d=()=>w.set([]);return t.$$set=u=>{"chat"in u&&f(o(0,w=u.chat)),"visible"in u&&n(o(1,i=u.visible))},[w,i,l,c,b,r,d]}class ge extends J{constructor(e){super(),V(this,e,de,ye,O,{chat:0,visible:1})}}export{ge as component};
