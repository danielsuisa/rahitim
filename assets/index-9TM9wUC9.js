(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Kt(n){if(!Number.isFinite(n))return"—";const t=Math.round(n*10)/10;return Number.isInteger(t)?String(t):t.toFixed(1)}function Dn(n){return Number.isFinite(n)?Math.abs(n)<.05?`${Math.round(n*1e3)} ג'`:`${n.toFixed(2)} ק"ג`:"—"}function Ct(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}function Mi(n="id"){const t=typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID().slice(0,8):Math.random().toString(16).slice(2,10);return`${n}-${t}`}function Ju(n,t,e){return Number.isFinite(n)?Math.min(e,Math.max(t,n)):t}function no(n,t,e=.15){return Math.abs(n-t)<=e}const Ro=Math.PI/180;function un(n){return n.rotation??{x:0,y:0,z:0}}function Bi(n){const t=n.rotation;return!!t&&(t.x!==0||t.y!==0||t.z!==0)}function vs(n){return{x:n.position.x+n.size.x/2,y:n.position.y+n.size.y/2,z:n.position.z+n.size.z/2}}function uo(n){const t=i=>{if(!Number.isFinite(i))return 0;const s=Math.round(i*10)/10;return Math.abs(s)<.05?0:s},e={x:t(n.x),y:t(n.y),z:t(n.z)};if(!(e.x===0&&e.y===0&&e.z===0))return e}function Ch(n){const t=n.x*Ro,e=n.y*Ro,i=n.z*Ro,s=Math.cos(t),r=Math.sin(t),o=Math.cos(e),a=Math.sin(e),l=Math.cos(i),c=Math.sin(i);return[o*l,l*r*a-s*c,s*l*a+r*c,o*c,r*a*c+s*l,s*a*c-l*r,-a,o*r,s*o]}function Rh(n,t){return{x:n[0]*t.x+n[1]*t.y+n[2]*t.z,y:n[3]*t.x+n[4]*t.y+n[5]*t.z,z:n[6]*t.x+n[7]*t.y+n[8]*t.z}}function ir(n){const t=vs(n),e=Ch(un(n)),i=n.size.x/2,s=n.size.y/2,r=n.size.z/2,o=[];for(const a of[-i,i])for(const l of[-s,s])for(const c of[-r,r]){const h=Rh(e,{x:a,y:l,z:c});o.push({x:t.x+h.x,y:t.y+h.y,z:t.z+h.z})}return o}function va(n){const t={x:0,y:0,z:0};return t[n.longAxis]=1,Rh(Ch(un(n)),t)}function ya(n){const t=vs(n),e=va(n),i=n.size[n.longAxis]/2;return[{x:t.x-e.x*i,y:t.y-e.y*i,z:t.z-e.z*i},{x:t.x+e.x*i,y:t.y+e.y*i,z:t.z+e.z*i}]}function Jl(n){const t=["x","y","z"].filter(e=>e!==n.longAxis).map(e=>n.size[e]);return n.size[n.longAxis]>=Math.max(t[0],t[1])*2.5}function Qu(n,t){const e=Math.hypot(n.x,n.y,n.z)||1,i=Math.hypot(t.x,t.y,t.z)||1,s=Math.min(1,Math.max(-1,(n.x*t.x+n.y*t.y+n.z*t.z)/(e*i))),r=Math.acos(s)*180/Math.PI;return Math.min(r,180-r)}function td(n,t,e){const i={x:e.x-t.x,y:e.y-t.y,z:e.z-t.z},s={x:n.x-t.x,y:n.y-t.y,z:n.z-t.z},r=i.x*i.x+i.y*i.y+i.z*i.z||1,o=Math.min(1,Math.max(0,(s.x*i.x+s.y*i.y+s.z*i.z)/r));return Math.hypot(n.x-(t.x+i.x*o),n.y-(t.y+i.y*o),n.z-(t.z+i.z*o))}function ed(n,t){if(!Jl(n))return null;const e=ya(n),i=va(n);let s=null;for(const r of t){if(r.id===n.id||!Jl(r))continue;const o=ya(r),a=Qu(i,va(r));if(!(a<12||a>78))for(const l of e){const c=td(l,o[0],o[1]);c>6||(!s||c<s.gap)&&(s={gap:c,angle:a})}}return s?s.angle:null}function Ph(n){const t=new Map;for(const o of n)t.set(`${o[0].toFixed(3)},${o[1].toFixed(3)}`,o);const e=[...t.values()].sort((o,a)=>o[0]-a[0]||o[1]-a[1]);if(e.length<=2)return e;const i=(o,a,l)=>(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]),s=[];for(const o of e){for(;s.length>=2&&i(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}const r=[];for(let o=e.length-1;o>=0;o-=1){const a=e[o];for(;r.length>=2&&i(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.pop(),r.pop(),s.concat(r)}const Lh=[{id:"ply18",name:'לביד 18 מ"מ',category:"sheet",thicknessMm:18,density:.55,color:"#c4a574"},{id:"ply12",name:'לביד 12 מ"מ',category:"sheet",thicknessMm:12,density:.55,color:"#d2b48c"},{id:"ply9",name:'לביד 9 מ"מ',category:"sheet",thicknessMm:9,density:.55,color:"#e4d0ae"},{id:"mdf18",name:'MDF 18 מ"מ',category:"sheet",thicknessMm:18,density:.75,color:"#e7d7be"},{id:"mdf16",name:'MDF 16 מ"מ',category:"sheet",thicknessMm:16,density:.75,color:"#efe3cf"},{id:"chip18",name:'סיבית 18 מ"מ',category:"sheet",thicknessMm:18,density:.68,color:"#d7c4a3"},{id:"mel18",name:'סיבית מלמין 18 מ"מ',category:"sheet",thicknessMm:18,density:.7,color:"#f3efe8"},{id:"pine25x50",name:'אורן 2.5×5 ס"מ',category:"lumber",sectionWmm:25,sectionHmm:50,density:.5,color:"#c4925a"},{id:"pine25x100",name:'אורן 2.5×10 ס"מ',category:"lumber",sectionWmm:25,sectionHmm:100,density:.5,color:"#d0a36e"},{id:"pine50x50",name:'אורן 5×5 ס"מ',category:"lumber",sectionWmm:50,sectionHmm:50,density:.5,color:"#a36b32"},{id:"pine50x100",name:'אורן 5×10 ס"מ',category:"lumber",sectionWmm:50,sectionHmm:100,density:.5,color:"#8d5a2b"},{id:"pine100x100",name:'אורן 10×10 ס"מ',category:"lumber",sectionWmm:100,sectionHmm:100,density:.52,color:"#7a4e24"},{id:"beech50x50",name:'אשור 5×5 ס"מ',category:"lumber",sectionWmm:50,sectionHmm:50,density:.72,color:"#b5814a"},Le("st20x20x15","פלדה 20×20×1.5",20,20,1.5,"steel","#8d97a3"),Le("st20x20x2","פלדה 20×20×2",20,20,2,"steel","#848e9a"),Le("st30x30x15","פלדה 30×30×1.5",30,30,1.5,"steel","#7e8894"),Le("st30x30x2","פלדה 30×30×2",30,30,2,"steel","#767f8b"),Le("st40x20x15","פלדה 40×20×1.5",40,20,1.5,"steel","#8a949f"),Le("st40x20x2","פלדה 40×20×2",40,20,2,"steel","#808994"),Le("st40x40x2","פלדה 40×40×2",40,40,2,"steel","#6e7882"),Le("st40x40x3","פלדה 40×40×3",40,40,3,"steel","#656f79"),Le("st50x50x2","פלדה 50×50×2",50,50,2,"steel","#626c76"),Le("st50x50x3","פלדה 50×50×3",50,50,3,"steel","#59636d"),Le("st60x40x2","פלדה 60×40×2",60,40,2,"steel","#5c6770"),Le("st60x40x3","פלדה 60×40×3",60,40,3,"steel","#535d66"),Le("al20x20x2","אלומיניום 20×20×2",20,20,2,"aluminum","#d5dbe1"),Le("al30x30x2","אלומיניום 30×30×2",30,30,2,"aluminum","#cdd4db"),Le("al40x20x2","אלומיניום 40×20×2",40,20,2,"aluminum","#c5ccd4"),Le("al40x40x2","אלומיניום 40×40×2",40,40,2,"aluminum","#b7c0c8"),Le("al50x50x2","אלומיניום 50×50×2",50,50,2,"aluminum","#aeb8c1"),Le("al60x40x2","אלומיניום 60×40×2",60,40,2,"aluminum","#a6b1ba"),fr("fl20x3","פס פלדה 20×3",20,3,"#9aa3ad"),fr("fl30x3","פס פלדה 30×3",30,3,"#909aa4"),fr("fl40x4","פס פלדה 40×4",40,4,"#868f99"),fr("fl50x5","פס פלדה 50×5",50,5,"#7c868f"),zs("an20x20x2","זווית פלדה 20×20×2",20,20,2,"#7f8b96"),zs("an30x30x3","זווית פלדה 30×30×3",30,30,3,"#74808b"),zs("an40x40x3","זווית פלדה 40×40×3",40,40,3,"#6a7681"),zs("an40x40x4","זווית פלדה 40×40×4",40,40,4,"#616d78"),zs("an50x50x5","זווית פלדה 50×50×5",50,50,5,"#58646e")];function Le(n,t,e,i,s,r,o){return{id:n,name:t,category:"tube",outerWmm:e,outerHmm:i,wallMm:s,density:r==="steel"?7.85:2.7,color:o,metal:r}}function fr(n,t,e,i,s){return{id:n,name:t,category:"flat",flatWmm:e,flatTmm:i,density:7.85,color:s,metal:"steel"}}function zs(n,t,e,i,s,r){return{id:n,name:t,category:"angle",legAmm:e,legBmm:i,wallMm:s,density:7.85,color:r,metal:"steel"}}function Dh(n=Lh){return n.map(t=>({...t}))}function ze(n,t){if(t)return n.find(e=>e.id===t)}function Ce(n,t,e){return ze(n,t)??(e?n.find(i=>i.category===e):void 0)??n[0]}function Qe(n){return(n.thicknessMm??18)/10}function qe(n){switch(n.category){case"lumber":return{w:(n.sectionWmm??50)/10,h:(n.sectionHmm??50)/10};case"tube":return{w:(n.outerWmm??40)/10,h:(n.outerHmm??40)/10};case"flat":return{w:(n.flatWmm??40)/10,h:(n.flatTmm??4)/10};case"angle":return{w:(n.legAmm??40)/10,h:(n.legBmm??40)/10};default:return null}}function nd(n){return n.category==="tube"||n.category==="flat"||n.category==="angle"}function id(n){return["x","y","z"].reduce((e,i)=>n[i]<n[e]?i:e)}function yl(n){return["x","y","z"].reduce((e,i)=>n[i]>n[e]?i:e)}function Ih(n,t){const e={...n,materialId:t.id,position:{...n.position},size:{...n.size},explode:{...n.explode}};if(t.category==="sheet"){const o=n.thicknessAxis??id(n.size);return e.thicknessAxis=o,e.size[o]=Qe(t),e.longAxis=yl(e.size),e}const i=qe(t);if(!i)return e;const s=n.longAxis,r=["x","y","z"].filter(o=>o!==s);return e.size[r[0]]=i.w,e.size[r[1]]=i.h,e.thicknessAxis=void 0,e}function Uh(n){switch(n){case"sheet":return"לוחות";case"lumber":return"עץ מלא";case"tube":return"צינורות";case"flat":return"פס שטוח";case"angle":return"זווית"}}const bn=1e-6;function sd(n){const t=[];for(const e of n){const i=Math.max(0,Math.round(e.qty));for(let s=0;s<i;s++)t.push({...e,qty:1,id:i>1?`${e.id}#${s+1}`:e.id})}return t}function rd(n,t,e){if(!(t>0))throw new Error("אורך מוט חייב להיות חיובי");const i=Math.max(0,e),s=sd(n).filter(o=>o.lengthCm>0).sort((o,a)=>a.lengthCm-o.lengthCm||o.id.localeCompare(a.id)),r=[];for(const o of s){if(o.lengthCm>t+bn){r.push({stockLengthCm:t,cuts:[{id:o.id,name:o.name,lengthCm:o.lengthCm,startCm:0}],usedCm:o.lengthCm,wasteCm:t-o.lengthCm,overflow:!0});continue}let a=!1;for(const l of r){if(l.overflow)continue;const c=l.cuts.length>0?i:0;if(l.usedCm+c+o.lengthCm<=t+bn){const h=l.usedCm+c;l.cuts.push({id:o.id,name:o.name,lengthCm:o.lengthCm,startCm:h}),l.usedCm=h+o.lengthCm,l.wasteCm=t-l.usedCm,a=!0;break}}a||r.push({stockLengthCm:t,cuts:[{id:o.id,name:o.name,lengthCm:o.lengthCm,startCm:0}],usedCm:o.lengthCm,wasteCm:t-o.lengthCm,overflow:!1})}return r}function od(n){const t=[];for(const e of n){const i=Math.max(0,Math.round(e.qty||1));for(let s=0;s<i;s++)t.push({...e,qty:1,id:i>1?`${e.id}#${s+1}`:e.id})}return t}function ad(n){const t={w:n.w,h:n.h,rotated:!1};return Math.abs(n.w-n.h)<bn?[t]:[t,{w:n.h,h:n.w,rotated:!0}]}function ld(n,t,e,i){const s=Math.max(t,e),r=Math.min(t,e);if(!(s>0&&r>0))throw new Error("גודל לוח חייב להיות חיובי");const o=Math.max(0,i),a=od(n).filter(h=>h.w>0&&h.h>0).sort((h,u)=>Math.max(u.w,u.h)-Math.max(h.w,h.h)||u.w*u.h-h.w*h.h||h.id.localeCompare(u.id)),l=[],c=(h,u)=>{const d=ad(u).filter(_=>_.w<=s+bn&&_.h<=r+bn).sort((_,m)=>_.h-m.h||m.w-_.w);if(d.length===0)return!1;for(const _ of h.shelves){const m=d.filter(p=>p.h<=_.h+bn);m.sort((p,S)=>S.w-p.w||p.h-S.h);for(const p of m){const S=_.x<=bn?0:_.x+o;if(S+p.w<=s+bn)return h.placements.push({id:u.id,name:u.name,x:S,y:_.y,w:p.w,h:p.h,rotated:p.rotated,overflow:!1}),_.x=S+p.w,!0}}const f=h.shelves.reduce((_,m)=>Math.max(_,m.y+m.h),0);let g=null;for(const _ of d){const m=h.shelves.length===0?0:f+o;m+_.h<=r+bn&&(!g||_.h<g.orient.h-bn||Math.abs(_.h-g.orient.h)<bn&&_.w>g.orient.w)&&(g={orient:_,y:m})}return g?(h.shelves.push({y:g.y,h:g.orient.h,x:g.orient.w}),h.placements.push({id:u.id,name:u.name,x:0,y:g.y,w:g.orient.w,h:g.orient.h,rotated:g.orient.rotated,overflow:!1}),!0):!1};for(const h of a){let u=!1;for(const f of l)if(!f.overflow&&c(f,h)){u=!0;break}if(u)continue;const d={width:s,height:r,placements:[],shelves:[],overflow:!1};if(c(d,h)){l.push(d);continue}l.push({width:s,height:r,shelves:[],overflow:!0,placements:[{id:h.id,name:h.name,x:0,y:0,w:h.w,h:h.h,rotated:!1,overflow:!0}]})}return l}function cd(n,t){const e=n.size[n.longAxis];if(t.category==="tube"){const i=(t.outerWmm??0)/10,s=(t.outerHmm??0)/10,r=(t.wallMm??0)/10,o=Math.max(0,i-2*r),a=Math.max(0,s-2*r);return e*Math.max(0,i*s-o*a)}if(t.category==="flat")return e*((t.flatWmm??0)/10)*((t.flatTmm??0)/10);if(t.category==="angle"){const i=(t.legAmm??0)/10,s=(t.legBmm??0)/10,r=(t.wallMm??0)/10;return e*Math.max(0,i+s-r)*r}return n.size.x*n.size.y*n.size.z}function hd(n,t){return cd(n,t)*t.density/1e3}function fo(n){if(n.length===0)return{minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0,length:0,depth:0,height:0};let t=1/0,e=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(const a of n){if(!Bi(a)){t=Math.min(t,a.position.x),e=Math.min(e,a.position.y),i=Math.min(i,a.position.z),s=Math.max(s,a.position.x+a.size.x),r=Math.max(r,a.position.y+a.size.y),o=Math.max(o,a.position.z+a.size.z);continue}for(const l of ir(a))t=Math.min(t,l.x),e=Math.min(e,l.y),i=Math.min(i,l.z),s=Math.max(s,l.x),r=Math.max(r,l.y),o=Math.max(o,l.z)}return{minX:t,minY:e,minZ:i,maxX:s,maxY:r,maxZ:o,length:s-t,depth:o-i,height:r-e}}function ud(n,t,e=[]){const i=t.category!=="sheet"&&Nh(n,t)?`אורך ${Kt(n.size[n.longAxis])} ס"מ`:`${Kt(n.size.x)} × ${Kt(n.size.y)} × ${Kt(n.size.z)} ס"מ`,s=[];if(Bi(n)){const o=un(n);s.push(`סיבוב ${Kt(o.x)}°/${Kt(o.y)}°/${Kt(o.z)}°`)}const r=ed(n,e);return r!==null&&s.push(`מפגש בזווית ${Math.round(r)}°`),s.length?`${i} · ${s.join(" · ")}`:i}function Nh(n,t){const e=qe(t);if(!e)return!1;const i=["x","y","z"].filter(r=>r!==n.longAxis).map(r=>n.size[r]).sort((r,o)=>r-o),s=[e.w,e.h].sort((r,o)=>r-o);return no(i[0],s[0])&&no(i[1],s[1])}function dd(n,t){if(t.category==="sheet")return[];if(t.category==="lumber"){if(Nh(n,t))return[{id:n.id,name:n.name,lengthCm:n.size[n.longAxis],qty:1}];const e=qe(t);if(!e)return[];const i=n.thicknessAxis??["x","y","z"].reduce((c,h)=>n.size[h]<n.size[c]?h:c),s=n.size[i],r=["x","y","z"].filter(c=>c!==i).map(c=>n.size[c]),o=Math.max(r[0],r[1]),a=Math.min(r[0],r[1]);let l=0;if(no(s,e.w)?l=e.h:no(s,e.h)&&(l=e.w),l>0)return[{id:n.id,name:n.name,lengthCm:o,qty:Math.max(1,Math.ceil((a-1e-6)/l))}]}return[{id:n.id,name:n.name,lengthCm:n.size[n.longAxis],qty:1}]}function fd(n,t){if(t.category!=="sheet")return[];const e=n.thicknessAxis??["x","y","z"].reduce((a,l)=>n.size[l]<n.size[a]?l:a),i=n.size[e],s=Qe(t),r=Math.max(1,Math.round(i/s)||1),o=["x","y","z"].filter(a=>a!==e);return[{id:n.id,name:n.name,w:n.size[o[0]],h:n.size[o[1]],qty:r}]}function pd(n,t){const e=new Map;for(const i of n){const s=Ce(t,i.materialId),r=ud(i,s,n),o=`${i.name}|${s.id}|${r}`,a=hd(i,s),l=e.get(o);l?(l.qty+=1,l.totalWeightKg+=a):e.set(o,{key:o,name:i.name,materialId:s.id,materialName:s.name,sizeLabel:r,qty:1,unitWeightKg:a,totalWeightKg:a,category:s.category})}return[...e.values()].sort((i,s)=>i.materialName.localeCompare(s.materialName,"he")||i.name.localeCompare(s.name,"he"))}function md(n){const t=n.filter(c=>c.role==="door"),e=n.filter(c=>c.role==="drawer-front"),i=n.filter(c=>c.role==="shelf"),s=n.filter(c=>c.role==="leg"),r=n.filter(c=>c.role==="slat"),o=[];if(t.length){const c=t.some(u=>u.size.y>=120),h=c?3:2;o.push({id:"hinges",name:"צירים",qty:t.length*h,note:c?'3 לדלת גבוהה מ-120 ס"מ':"2 לדלת"})}(t.length||e.length)&&o.push({id:"handles",name:"ידיות",qty:t.length+e.length,note:"אחת לדלת או לחזית מגירה"}),e.length&&o.push({id:"slides",name:"מסילות מגירה (זוג)",qty:e.length,note:"זוג לכל מגירה"}),i.length&&o.push({id:"pins",name:"פיני מדף",qty:i.length*4,note:"4 לכל מדף"}),s.length&&o.push({id:"feet",name:"רגליות",qty:s.length,note:"אחת לכל רגל"});const l=n.filter(c=>c.role!=="shelf").length*4+r.length*0;return l>0&&o.push({id:"screws",name:"ברגים / קונפירמטים",qty:l,note:"הערכה: 4 חיבורים לחלק, בלי מדפים על פין"}),o}function gd(n,t){return n.map(e=>{const i=t[e.id];return Number.isFinite(i)?{...e,qty:Math.max(0,Math.round(i))}:e})}function _d(n){const t=new Map;for(const e of n){const i=Math.round(e.lengthCm*10)/10,s=`${e.name}|${i}`,r=t.get(s);r?r.qty+=e.qty:t.set(s,{id:e.id,name:e.name,lengthCm:i,qty:e.qty})}return[...t.values()].sort((e,i)=>i.lengthCm-e.lengthCm||e.name.localeCompare(i.name,"he"))}function po(n,t){const e=n.parts,i=pd(e,t),s=n.stock,r=s.kerfMm/10,o=new Map,a=[];for(const u of e){const d=Ce(t,u.materialId);if(d.category==="sheet")a.push(...fd(u,d));else{const f=o.get(d.id)??[];f.push(...dd(u,d)),o.set(d.id,f)}}const l=[];for(const[u,d]of o){const f=Ce(t,u),g=nd(f)?s.metalLengthCm:s.lumberLengthCm,_=_d(d);l.push({materialId:u,materialName:f.name,pieces:_,bars:rd(_,g,r),stockLengthCm:g})}l.sort((u,d)=>u.materialName.localeCompare(d.materialName,"he"));const c=s.sheetKerfMm/10,h={sheetLengthCm:s.sheetLengthCm,sheetWidthCm:s.sheetWidthCm,kerfCm:c,panels:a,sheets:a.length?ld(a,s.sheetLengthCm,s.sheetWidthCm,c):[]};return{lines:i,totalWeightKg:i.reduce((u,d)=>u+d.totalWeightKg,0),linear:l,sheets:h,hardware:gd(md(e),n.hardwareOverrides),bounds:fo(e)}}function xd(){return{lumberLengthCm:300,metalLengthCm:600,kerfMm:3,sheetLengthCm:244,sheetWidthCm:122,sheetKerfMm:4}}const vd=[{re:/שולחן\s*עבודה|workbench/i,id:"workbench"},{re:/שולחן\s*כתיבה|שולחן\s*מחשב|\bdesk\b/i,id:"desk"},{re:/מזנון|מעמד\s*טלוויזיה|\btv\b/i,id:"tv"},{re:/כוננית|ספרייה|bookcase|\bshelf\b/i,id:"shelf"},{re:/ארון|cabinet|closet/i,id:"cabinet"},{re:/מיטה|\bbed\b/i,id:"bed"},{re:/ספסל|\bbench\b/i,id:"bench"},{re:/שרפרף|הדום|\bstool\b/i,id:"stool"},{re:/שולחן|\btable\b/i,id:"table"}];function ls(n){return Number(n.replace(",","."))}function bi(n,t){const e=n.match(t);if(!e)return;const i=ls(e[1]);return Number.isFinite(i)?i:void 0}function yd(n){const t=n.trim();if(!t)return{note:"אין טקסט"};let e;for(const m of vd)if(m.re.test(t)){e=m.id;break}const i=bi(t,/אורך\s*[:=]?\s*(\d+(?:[.,]\d+)?)/),s=bi(t,/רוחב\s*[:=]?\s*(\d+(?:[.,]\d+)?)/),r=bi(t,/עומק\s*[:=]?\s*(\d+(?:[.,]\d+)?)/),o=bi(t,/גובה\s*[:=]?\s*(\d+(?:[.,]\d+)?)/),a=bi(t,/(\d+)\s*מדפ/);let l=bi(t,/(\d+)\s*דלת/),c=bi(t,/(\d+)\s*מגיר/);/בלי\s*דלת/.test(t)&&(l=0),/בלי\s*מגיר/.test(t)&&(c=0);const h=t.match(/(\d+(?:[.,]\d+)?)\s*(?:על|x|×|\*)\s*(\d+(?:[.,]\d+)?)\s*(?:על|x|×|\*)\s*(\d+(?:[.,]\d+)?)/i),u=t.match(/(\d+(?:[.,]\d+)?)\s*(?:על|x|×|\*)\s*(\d+(?:[.,]\d+)?)/i),d=h?ls(h[1]):u?ls(u[1]):void 0,f=h?ls(h[2]):u?ls(u[2]):void 0,g=h?ls(h[3]):void 0,_={templateId:e,note:e?"זוהה מקומית":"לא זוהתה תבנית"};return e==="bed"?(_.depth=i??d,_.length=s??r??f,_.height=o??g):(_.length=i??s??d,_.depth=r??(i!==void 0?s:void 0)??f,_.height=o??g),a!==void 0&&(_.shelves=a),l!==void 0&&(_.doors=l),c!==void 0&&(_.drawers=c),_}async function Md(n){return yd(n)}class Sd{constructor(t,e){this.host=t,this.api=e,t.innerHTML=`
      <div class="editor-tools">
        <div class="segmented" role="group" aria-label="מבט">
          <button type="button" data-view="front">חזית</button>
          <button type="button" data-view="side">צד</button>
          <button type="button" data-view="top" class="on">על</button>
        </div>
        <label class="snap">הצמדה
          <select data-snap>
            <option value="0.5">0.5</option>
            <option value="1" selected>1 ס"מ</option>
            <option value="5">5</option>
          </select>
        </label>
        <button type="button" data-tool="select" class="on">הזזה</button>
        <button type="button" data-tool="image">הזז תמונה</button>
        <button type="button" data-tool="calibrate">כיול קו</button>
        <button type="button" data-fit>התאם</button>
      </div>
      <div class="editor-stage" dir="ltr">
        <svg class="editor-svg" tabindex="0" role="application" aria-label="עורך חלקים"></svg>
      </div>
      <div class="editor-add">
        <button type="button" data-add="panel">לוח</button>
        <button type="button" data-add="lumber">קורה</button>
        <button type="button" data-add="tube">צינור</button>
        <button type="button" data-add="flat">פס</button>
        <button type="button" data-add="angle">זווית</button>
        <button type="button" data-add="box">תיבה</button>
        <button type="button" data-action="dup-part">שכפול</button>
        <button type="button" data-action="mirror-part">ראי</button>
        <button type="button" data-action="lock">נעילה</button>
        <button type="button" data-delete class="danger">מחק חלק</button>
      </div>
      <div class="inspector"></div>
      <div class="reference">
        <label class="file">תמונת רקע
          <input type="file" accept="image/*" data-file />
        </label>
        <label>שקיפות <input type="range" min="0" max="100" value="45" data-opacity /></label>
        <button type="button" data-clear-image>הסר תמונה</button>
        <p class="hint">העלו צילום או סקיצה, בחרו "כיול קו", מתחו קו על מידה ידועה והקלידו את האורך בס"מ.</p>
        <div class="calibrate-row" hidden>
          <label>אורך הקו בס"מ <input class="num" type="number" min="0.5" step="0.1" data-cal-length /></label>
          <button type="button" data-cal-apply>כייל</button>
        </div>
      </div>`,this.svg=t.querySelector("svg"),this.bind(),this.redraw()}view="top";tool="select";snap=1;zoom=1;panX=0;panY=0;drag=null;cal=null;pointers=new Map;pinch=null;svg;inspectorKey="";setMoveSnap(t){const e=this.host.querySelector("[data-snap]"),i=Number(e?.value)||1;this.snap=t?i:0}redraw(){this.draw(),this.syncInspector(),this.host.querySelectorAll("[data-view]").forEach(t=>{t.classList.toggle("on",t.dataset.view===this.view)}),this.host.querySelectorAll("[data-tool]").forEach(t=>{t.classList.toggle("on",t.dataset.tool===this.tool)})}resetView(){this.zoom=1,this.panX=0,this.panY=0,this.redraw()}bind(){this.host.addEventListener("click",t=>{const e=t.target.closest("button");!e||!this.host.contains(e)||(e.dataset.view?(this.view=e.dataset.view,this.resetView()):e.dataset.tool?(this.tool=e.dataset.tool,this.redraw()):e.dataset.fit!==void 0?this.resetView():e.dataset.add?this.api.addPart(e.dataset.add):e.dataset.delete!==void 0?this.api.deleteSelected():e.dataset.calApply!==void 0?this.applyCalibration():e.dataset.clearImage!==void 0&&(this.api.patchReference({referenceImage:void 0,referenceWidthCm:0}),this.cal=null,this.redraw()))}),this.host.querySelector("[data-snap]").addEventListener("change",t=>{this.snap=Number(t.target.value)||1}),this.host.querySelector("[data-opacity]").addEventListener("input",t=>{this.api.patchReference({referenceOpacity:Number(t.target.value)/100}),this.draw()}),this.host.querySelector("[data-file]").addEventListener("change",t=>{const e=t.target.files?.[0];e&&this.loadImage(e)}),this.svg.addEventListener("pointerdown",t=>this.onDown(t)),this.svg.addEventListener("pointermove",t=>this.onMove(t)),this.svg.addEventListener("pointerup",t=>this.onUp(t)),this.svg.addEventListener("pointercancel",t=>this.onUp(t)),this.host.addEventListener("input",t=>{const e=t.target;e.dataset.axis&&this.onInspector(e)}),this.host.addEventListener("change",t=>{const e=t.target;if(e.dataset.inspectorMaterial!==void 0){const i=this.selected();if(!i)return;const s=ze(this.api.getMaterials(),e.value);if(!s)return;const r=i.freeSize?{...i,materialId:s.id}:wd(i,s);this.api.commitPart(r),this.inspectorKey="",this.redraw()}})}async loadImage(t){try{const e=await Cd(t);this.api.patchReference({referenceImage:e,referenceWidthCm:0,referenceOpacity:this.api.getProject().referenceOpacity||.45}),this.redraw()}catch{this.api.toast("לא הצלחנו לקרוא את התמונה.")}}onDown(t){if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.svg.setPointerCapture(t.pointerId),this.pointers.size===2){this.drag=null;const[a,l]=[...this.pointers.values()];this.pinch={dist:Math.hypot(a.x-l.x,a.y-l.y)||1,zoom:this.zoom};return}const e=this.toWorld(t),i=this.api.getProject(),s=i.parts[0]??bd();if(this.tool==="calibrate"&&i.referenceImage){this.cal={a:e,b:e},this.drag={kind:"calibrate",pointer:t.pointerId,start:e,origin:s,panX:this.panX,panY:this.panY,offset:{...i.referenceOffset}};return}if(this.tool==="image"&&i.referenceImage){this.materializeReference(),this.drag={kind:"image",pointer:t.pointerId,start:e,origin:s,panX:this.panX,panY:this.panY,offset:{...this.api.getProject().referenceOffset}};return}const r=t.target.closest("[data-handle]"),o=t.target.closest("[data-part]");if(r?.dataset.partId){const a=i.parts.find(l=>l.id===r.dataset.partId);if(!a||a.locked||Bi(a))return;this.api.select(a.id),this.api.beginGesture(),this.drag={kind:"resize",pointer:t.pointerId,id:a.id,corner:r.dataset.handle,start:e,origin:cs(a),panX:this.panX,panY:this.panY,offset:{...i.referenceOffset}};return}if(o?.dataset.part){const a=i.parts.find(l=>l.id===o.dataset.part);if(!a||(this.api.select(a.id),a.locked))return;this.api.beginGesture(),this.drag={kind:"move",pointer:t.pointerId,id:a.id,start:e,origin:cs(a),panX:this.panX,panY:this.panY,offset:{...i.referenceOffset}};return}this.api.select(null),this.drag={kind:"pan",pointer:t.pointerId,start:{x:t.clientX,y:t.clientY},origin:s,panX:this.panX,panY:this.panY,offset:{...i.referenceOffset}}}onMove(t){if(!this.pointers.has(t.pointerId))return;if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size>=2&&this.pinch){const[l,c]=[...this.pointers.values()],h=Math.hypot(l.x-c.x,l.y-c.y)||1;this.zoom=Td(this.pinch.zoom*(h/this.pinch.dist),.35,8),this.draw();return}if(!this.drag||this.drag.pointer!==t.pointerId)return;const e=this.toWorld(t);if(this.drag.kind==="pan"){this.panX=this.drag.panX+(t.clientX-this.drag.start.x),this.panY=this.drag.panY+(t.clientY-this.drag.start.y),this.draw();return}if(this.drag.kind==="calibrate"&&this.cal){this.cal.b=e,this.draw();return}if(this.drag.kind==="image"){const{h:l,v:c}=si(this.view),h={...this.drag.offset};h[l]=this.drag.offset[l]+(e.x-this.drag.start.x),h[c]=this.drag.offset[c]+(e.y-this.drag.start.y),this.api.patchReference({referenceOffset:h}),this.draw();return}const i=cs(this.drag.origin),{h:s,v:r}=si(this.view),o=e.x-this.drag.start.x,a=e.y-this.drag.start.y;this.drag.kind==="move"?(io(i,s,this.api.getMaterials())||(i.position[s]=this.snapTo(this.drag.origin.position[s]+o)),io(i,r,this.api.getMaterials())?(i.position[s]=this.snapTo(this.drag.origin.position[s]+o),i.position[r]=this.snapTo(this.drag.origin.position[r]+a)):i.position[r]=this.snapTo(this.drag.origin.position[r]+a),i.position[s]=this.snapTo(this.drag.origin.position[s]+o),i.position[r]=this.snapTo(this.drag.origin.position[r]+a)):this.drag.corner&&Ed(i,s,r,this.drag.corner,o,a,l=>this.snapTo(l),this.api.getMaterials()),this.api.commitPart(i),this.draw(),this.syncInspector(!0)}onUp(t){if(this.pointers.delete(t.pointerId),this.pointers.size<2&&(this.pinch=null),this.drag?.kind==="calibrate"){const e=this.host.querySelector(".calibrate-row");e&&(e.hidden=!1)}this.drag?.pointer===t.pointerId&&((this.drag.kind==="move"||this.drag.kind==="resize")&&this.api.endGesture(),this.drag=null)}applyCalibration(){if(!this.cal){this.api.toast("מתחו קודם קו על התמונה.");return}const t=this.host.querySelector("[data-cal-length]"),e=Number(t?.value),i=Math.hypot(this.cal.b.x-this.cal.a.x,this.cal.b.y-this.cal.a.y);if(!(e>0)||i<.2){this.api.toast("הקו קצר מדי, או שאורך הכיול חסר.");return}this.materializeReference();const s=this.api.getProject(),r=this.imageWorld(),o=e/i,a=(s.referenceWidthCm||r.w)*o,l=r.x+r.w/2,c=r.y+r.h/2,h=r.h/r.w,u=a,d=a*h,f={...s.referenceOffset},{h:g,v:_}=si(this.view);f[g]=l-u/2,f[_]=c-d/2,this.api.patchReference({referenceWidthCm:a,referenceOffset:f}),this.api.toast("קנה המידה עודכן."),this.redraw()}materializeReference(){const t=this.api.getProject();if(t.referenceWidthCm>0||!t.referenceImage)return;const e=this.imageWorld(),i={...t.referenceOffset},{h:s,v:r}=si(this.view);i[s]=e.x,i[r]=e.y,this.api.patchReference({referenceWidthCm:e.w,referenceOffset:i})}draw(){const t=this.api.getProject(),e=Math.max(320,this.svg.clientWidth||this.host.clientWidth||640),i=Math.max(280,Math.min(560,Math.round(e*.72)));this.svg.setAttribute("viewBox",`0 0 ${e} ${i}`);const s=this.transform(t.parts,e,i),r=[...t.parts].reverse(),o=this.api.getSelected(),a=this.imageMarkup(t,s),l=this.gridMarkup(s,e,i),c=r.map(f=>{const{h:g,v:_}=si(this.view),p=Ph(ir(f).map(x=>[x[g],x[_]])).map(([x,D])=>`${s.sx(x).toFixed(1)},${s.sy(D).toFixed(1)}`).join(" "),S=ze(this.api.getMaterials(),f.materialId),v=f.id===o;return`<polygon data-part="${Ct(f.id)}" points="${p}" fill="${S?.color??"#c4a574"}" fill-opacity="${v?1:.88}" stroke="${v?"#8a3f24":"#2c2118"}" stroke-width="${v?2.5:1}"/>`}).join(""),h=this.handleMarkup(o,s),u=this.cal?`<line x1="${s.sx(this.cal.a.x)}" y1="${s.sy(this.cal.a.y)}" x2="${s.sx(this.cal.b.x)}" y2="${s.sy(this.cal.b.y)}" stroke="#8a3f24" stroke-width="3" stroke-dasharray="6 4"/>`:"",d=10*s.scale;this.svg.innerHTML=`${l}${a}${c}${h}${u}
      <g class="scalebar">
        <line x1="16" y1="${i-22}" x2="${16+d}" y2="${i-22}" stroke="#241910" stroke-width="2"/>
        <text x="16" y="${i-28}" font-size="12" fill="#241910" font-family="Rubik, sans-serif">10 ס"מ</text>
      </g>`}handleMarkup(t,e){if(!t)return"";const i=this.api.getProject().parts.find(a=>a.id===t);if(!i||i.locked||Bi(i))return"";const{h:s,v:r}=si(this.view);return[["minmin",i.position[s],i.position[r]],["maxmin",i.position[s]+i.size[s],i.position[r]],["maxmax",i.position[s]+i.size[s],i.position[r]+i.size[r]],["minmax",i.position[s],i.position[r]+i.size[r]]].map(([a,l,c])=>{const h=e.sx(l),u=e.sy(c);return`<circle data-handle="${a}" data-part-id="${Ct(i.id)}" cx="${h}" cy="${u}" r="14" fill="#8a3f24" fill-opacity="0.18" stroke="#8a3f24" stroke-width="2"/>
          <circle cx="${h}" cy="${u}" r="5" fill="#fffaf3" stroke="#8a3f24" pointer-events="none"/>`}).join("")}gridMarkup(t,e,i){const s=this.toWorldPoint(0,i,t),r=this.toWorldPoint(e,0,t),o=Math.floor(Math.min(s.x,r.x)/10)*10,a=Math.ceil(Math.max(s.x,r.x)/10)*10,l=Math.floor(Math.min(s.y,r.y)/10)*10,c=Math.ceil(Math.max(s.y,r.y)/10)*10;let h="";for(let u=o;u<=a;u+=10)h+=`<line x1="${t.sx(u)}" y1="0" x2="${t.sx(u)}" y2="${i}" stroke="#e5d8c6" stroke-width="1"/>`;for(let u=l;u<=c;u+=10)h+=`<line x1="0" y1="${t.sy(u)}" x2="${e}" y2="${t.sy(u)}" stroke="#e5d8c6" stroke-width="1"/>`;return`<g>${h}</g>`}imageMarkup(t,e){if(!t.referenceImage)return"";const i=this.imageWorld(),s=e.sx(i.x),r=e.sy(i.y+i.h),o=i.w*e.scale,a=i.h*e.scale;return`<image href="${t.referenceImage}" x="${s}" y="${r}" width="${o}" height="${a}" opacity="${t.referenceOpacity}" preserveAspectRatio="none"/>`}imageWorld(){const t=this.api.getProject(),e=Ad(t.referenceImage),i=fo(t.parts),s=this.view==="side"?i.depth||100:(this.view==="front",i.length||100),r=t.referenceWidthCm>0?t.referenceWidthCm:s,o=r*e;if(t.referenceWidthCm>0){const{h:c,v:h}=si(this.view);return{x:t.referenceOffset[c],y:t.referenceOffset[h],w:r,h:o}}const a=this.view==="side"?(i.minZ+i.maxZ)/2:(i.minX+i.maxX)/2,l=this.view==="top"?(i.minZ+i.maxZ)/2:(i.minY+i.maxY)/2;return{x:a-r/2,y:l-o/2,w:r,h:o}}transform(t,e,i){const{h:s,v:r}=si(this.view);let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const m of t)for(const p of ir(m))o=Math.min(o,p[s]),a=Math.min(a,p[r]),l=Math.max(l,p[s]),c=Math.max(c,p[r]);Number.isFinite(o)||(o=0,a=0,l=100,c=80);const h=48,u=Math.min((e-h*2)/Math.max(1,l-o),(i-h*2)/Math.max(1,c-a))*this.zoom,d=(o+l)/2,f=(a+c)/2,g=e/2-d*u+this.panX,_=i/2+f*u+this.panY;return{scale:u,sx:m=>g+m*u,sy:m=>_-m*u,ox:g,oy:_}}toWorld(t){const e=this.svg.getBoundingClientRect(),i=this.svg.viewBox.baseVal,s=(t.clientX-e.left)/e.width*i.width,r=(t.clientY-e.top)/e.height*i.height,o=this.transform(this.api.getProject().parts,i.width,i.height);return this.toWorldPoint(s,r,o)}toWorldPoint(t,e,i){return{x:(t-i.ox)/i.scale,y:(i.oy-e)/i.scale}}snapTo(t){return this.snap>0?Math.round(t/this.snap)*this.snap:Math.round(t*10)/10}selected(){const t=this.api.getSelected();return this.api.getProject().parts.find(e=>e.id===t)??null}syncInspector(t=!1){const e=this.selected(),i=this.host.querySelector(".inspector"),s=e?`${e.id}:${this.api.getMaterials().length}:${this.view}`:"none";if(!e){i.innerHTML='<p class="hint">בחרו חלק בשרטוט או בתלת־ממד, או הוסיפו לוח, צינור, קורה או תיבה.</p>',this.inspectorKey="none";return}if(this.inspectorKey!==s&&!t){const r=ze(this.api.getMaterials(),e.materialId),o=this.api.getMaterials().map(c=>`<option value="${Ct(c.id)}" ${c.id===e.materialId?"selected":""}>${Ct(c.name)}</option>`).join(""),a=vs(e),l=un(e);i.innerHTML=`
        <h3>${Ct(e.name)}${e.locked?" · נעול":""}</h3>
        <label>שם <input data-axis="name" value="${Ct(e.name)}" ${e.locked?"disabled":""} /></label>
        <label>חומר
          <select data-inspector-material ${e.locked?"disabled":""}>${o}</select>
        </label>
        <p class="hint">מיקום (מרכז החלק)</p>
        <div class="triple">
          ${kn("x","X",a.x,e.locked)}
          ${kn("y","Y",a.y,e.locked)}
          ${kn("z","Z",a.z,e.locked)}
        </div>
        <p class="hint">מידה מקומית, לפני הסיבוב</p>
        <div class="triple">
          ${kn("sx","אורך",e.size.x,e.locked)}
          ${kn("sy","גובה",e.size.y,e.locked)}
          ${kn("sz","עומק",e.size.z,e.locked)}
        </div>
        <p class="hint">סיבוב במעלות, כל ציר בנפרד</p>
        <div class="triple">
          ${kn("rx","X°",l.x,e.locked)}
          ${kn("ry","Y°",l.y,e.locked)}
          ${kn("rz","Z°",l.z,e.locked)}
        </div>
        <p class="hint">${r?Ct(Uh(r.category)):""} · גרירה מזיזה במבט הנוכחי. סיבוב חופשי נעשה בידיות התלת־ממד או בשדות המעלות.</p>`,this.inspectorKey=s;return}if(t){const r=vs(e),o=un(e);Hn(i,"x",r.x),Hn(i,"y",r.y),Hn(i,"z",r.z),Hn(i,"sx",e.size.x),Hn(i,"sy",e.size.y),Hn(i,"sz",e.size.z),Hn(i,"rx",o.x),Hn(i,"ry",o.y),Hn(i,"rz",o.z)}}onInspector(t){const e=this.selected();if(!e||e.locked)return;const i=t.dataset.axis;if(i==="name"){this.api.commitPart({...e,name:t.value||e.name});return}const s=Number(t.value);if(!Number.isFinite(s))return;const r=cs(e);if((i==="x"||i==="y"||i==="z")&&(r.position[i]=s-r.size[i]/2),i==="sx"&&(r.size.x=Math.max(.4,s)),i==="sy"&&(r.size.y=Math.max(.4,s)),i==="sz"&&(r.size.z=Math.max(.4,s)),(i==="sx"||i==="sy"||i==="sz")&&(r.freeSize=!0,r.longAxis=zh(r.size)),i==="rx"||i==="ry"||i==="rz"){const o=un(r),a=i.slice(1);o[a]=s,r.rotation=uo(o)}this.api.commitPart(r),this.draw()}}function kn(n,t,e,i=!1){return`<label>${t}<input class="num" data-axis="${n}" type="number" step="0.1" value="${Kt(e)}" ${i?"disabled":""} /></label>`}function Hn(n,t,e){const i=n.querySelector(`[data-axis="${t}"]`);!i||document.activeElement===i||(i.value=Kt(e))}function si(n){return n==="front"?{h:"x",v:"y"}:n==="side"?{h:"z",v:"y"}:{h:"x",v:"z"}}function bd(){return{id:"_",name:"",role:"custom",origin:"user",position:{x:0,y:0,z:0},size:{x:1,y:1,z:1},materialId:"",longAxis:"y",explode:{x:0,y:0,z:0}}}function cs(n){return{...n,position:{...n.position},size:{...n.size},explode:{...n.explode},rotation:n.rotation?{...n.rotation}:void 0}}function zh(n){return["x","y","z"].reduce((t,e)=>n[e]>n[t]?e:t)}function io(n,t,e){if(n.freeSize)return!1;const i=ze(e,n.materialId);return i?i.category==="sheet"?n.thicknessAxis===t:t!==n.longAxis:!1}function Ed(n,t,e,i,s,r,o,a){const l=cs(n),c=i==="maxmin"||i==="maxmax",h=i==="maxmax"||i==="minmax";if(!io(n,t,a))if(c)n.size[t]=Math.max(.5,o(l.size[t]+s));else{const u=o(l.position[t]+s);n.size[t]=Math.max(.5,l.size[t]-(u-l.position[t])),n.position[t]=l.position[t]+l.size[t]-n.size[t]}if(!io(n,e,a))if(h)n.size[e]=Math.max(.5,o(l.size[e]+r));else{const u=o(l.position[e]+r);n.size[e]=Math.max(.5,l.size[e]-(u-l.position[e])),n.position[e]=l.position[e]+l.size[e]-n.size[e]}n.longAxis=zh(n.size)}function wd(n,t){const e=cs(n);if(e.materialId=t.id,n.freeSize)return e;if(t.category==="sheet"){const r=n.thicknessAxis??"y";return e.thicknessAxis=r,e.size[r]=Qe(t),e}const i=qe(t);if(!i)return e;const s=["x","y","z"].filter(r=>r!==n.longAxis);return e.size[s[0]]=i.w,e.size[s[1]]=i.h,e}function Td(n,t,e){return Math.min(e,Math.max(t,n))}function Ad(n){if(!n)return .75;const t=Po.get(n);if(t)return t;const e=new Image;if(e.src=n,e.naturalWidth){const i=e.naturalHeight/e.naturalWidth;return Po.set(n,i),i}return e.onload=()=>{Po.set(n,e.naturalHeight/e.naturalWidth||.75)},.75}const Po=new Map;async function Cd(n){const t=URL.createObjectURL(n);try{const e=await Rd(t),s=Math.min(1,1400/Math.max(e.naturalWidth,e.naturalHeight)),r=document.createElement("canvas");r.width=Math.max(1,Math.round(e.naturalWidth*s)),r.height=Math.max(1,Math.round(e.naturalHeight*s));const o=r.getContext("2d");if(!o)throw new Error("canvas");return o.drawImage(e,0,0,r.width,r.height),r.toDataURL("image/jpeg",.72)}finally{URL.revokeObjectURL(t)}}function Rd(n){return new Promise((t,e)=>{const i=new Image;i.onload=()=>t(i),i.onerror=()=>e(new Error("image")),i.src=n})}const Ml={table:"שולחן",bench:"ספסל",shelf:"כוננית",cabinet:"ארון",bed:"מיטה",desk:"שולחן כתיבה",tv:"מזנון",workbench:"שולחן עבודה",stool:"שרפרף",free:"עיצוב חופשי"},Fs={key:"legKind",type:"select",label:"סוג רגליים",options:[{value:"wood",label:"עץ מלא"},{value:"steel",label:"פלדה"},{value:"aluminum",label:"אלומיניום"}]},Ql={key:"doors",type:"select",label:"דלתות",options:[{value:"0",label:"בלי דלתות"},{value:"1",label:"דלת אחת"},{value:"2",label:"שתי דלתות"}]},Ma=[{id:"table",name:"שולחן",blurb:"משטח, ארבע רגליים, סינר אופציונלי",fields:[zt("length","אורך",40,400,1),zt("depth","עומק",30,200,1),zt("height","גובה",30,120,1),zt("topThickness","עובי משטח",.9,8,.1),ge("topMaterial","חומר משטח",["sheet","lumber"]),Fs,ge("legMaterial","חתך רגליים",["lumber","tube","angle","flat"],!0),zt("inset","הכנסת רגליים",0,30,.5),fn("apron","סינר / מסגרת עליונה"),zt("apronHeight","גובה סינר",4,20,.5),ge("apronMaterial","חומר סינר",["sheet","lumber"]),fn("stretcher","קורת חיבור תחתונה")]},{id:"bench",name:"ספסל",blurb:"מושב ארוך, רגליים וקורת חיבור",fields:[zt("length","אורך",50,300,1),zt("depth","עומק",20,80,1),zt("height","גובה",30,60,1),zt("topThickness","עובי מושב",1.2,6,.1),ge("topMaterial","חומר מושב",["sheet","lumber"]),Fs,ge("legMaterial","חתך רגליים",["lumber","tube","angle"],!0),zt("inset","הכנסת רגליים",0,20,.5),fn("stretcher","קורת חיבור")]},{id:"shelf",name:"כוננית",blurb:"דפנות, מדפים וגב",fields:[zt("length","רוחב",30,240,1),zt("depth","עומק",15,80,1),zt("height","גובה",40,280,1),zt("shelves","מספר מדפים",0,12,1),ge("boardMaterial","חומר גוף",["sheet"]),fn("back","גב"),ge("backMaterial","חומר גב",["sheet"]),zt("plinth","גובה צוקל",0,20,1)]},{id:"cabinet",name:"ארון",blurb:"ארגז, מדפים, דלתות ומגירות",fields:[zt("length","רוחב",30,240,1),zt("depth","עומק",25,80,1),zt("height","גובה",40,280,1),zt("shelves","מדפים מעל המגירות",0,8,1),Ql,zt("drawers","מגירות",0,8,1),ge("boardMaterial","חומר גוף",["sheet"]),ge("doorMaterial","חומר דלתות וחזיתות",["sheet"]),fn("back","גב"),ge("backMaterial","חומר גב",["sheet"]),zt("plinth","גובה צוקל",0,20,1)]},{id:"bed",name:"מיטה",blurb:"מסגרת, ראש מיטה, מרגלות ושלבים",fields:[zt("length","רוחב",80,220,1),zt("depth","אורך",180,230,1),zt("height","גובה מסגרת",25,70,1),zt("headboard","גובה ראש מיטה",40,160,1),zt("footboard","גובה מרגלות",20,120,1),zt("slats","מספר שלבים",6,28,1),ge("legMaterial","רגליים",["lumber","tube"]),ge("railMaterial","קורות צד",["lumber","sheet"]),ge("panelMaterial","ראש ומרגלות",["sheet","lumber"]),ge("slatMaterial","שלבים",["lumber"])]},{id:"desk",name:"שולחן כתיבה",blurb:"משטח, מגירות בצד אחד או בשניים, ופאנל אחורי",fields:[zt("length","אורך",80,240,1),zt("depth","עומק",45,90,1),zt("height","גובה",65,85,1),zt("topThickness","עובי משטח",1.2,5,.1),ge("topMaterial","חומר משטח",["sheet","lumber"]),{key:"pedestal",type:"select",label:"מגירות",options:[{value:"none",label:"בלי ארון מגירות"},{value:"left",label:"משמאל"},{value:"right",label:"מימין"},{value:"both",label:"משני הצדדים"}]},zt("pedestalWidth","רוחב ארון המגירות",32,60,1),zt("drawers","מגירות בארון",1,5,1),ge("boardMaterial","חומר הארון",["sheet"]),ge("doorMaterial","חזיתות מגירה",["sheet"]),fn("modesty","פאנל אחורי"),Fs,ge("legMaterial","רגליים בצד הפתוח",["lumber","tube","angle"],!0),fn("apron","סינר כשאין ארון")]},{id:"tv",name:"מזנון",blurb:"ארון נמוך לטלוויזיה, עם מרווח כבלים בגב",fields:[zt("length","אורך",80,280,1),zt("depth","עומק",30,60,1),zt("height","גובה",30,70,1),zt("shelves","מדפים",0,3,1),Ql,zt("drawers","מגירות",0,4,1),ge("boardMaterial","חומר גוף",["sheet"]),ge("doorMaterial","דלתות וחזיתות",["sheet"]),fn("back","גב"),zt("plinth","גובה צוקל",0,12,1),fn("cableGap","מרווח כבלים בגב")]},{id:"workbench",name:"שולחן עבודה",blurb:"משטח עבה, רגלי מתכת, קורות ומדף תחתון",fields:[zt("length","אורך",80,300,1),zt("depth","עומק",45,100,1),zt("height","גובה",70,100,1),zt("topThickness","עובי משטח",1.8,8,.1),ge("topMaterial","חומר משטח",["lumber","sheet"]),Fs,ge("legMaterial","רגליים",["tube","lumber","angle"],!0),fn("stretcher","מסגרת קורות"),fn("lowerShelf","מדף תחתון")]},{id:"stool",name:"שרפרף",blurb:"מושב מרובע, ארבע רגליים וחיבורים",fields:[zt("length","רוחב",25,60,1),zt("depth","עומק",25,60,1),zt("height","גובה",30,80,1),zt("topThickness","עובי מושב",1.2,5,.1),ge("topMaterial","חומר מושב",["sheet","lumber"]),Fs,ge("legMaterial","רגליים",["lumber","tube","angle"],!0),fn("stretcher","חיבורים בין הרגליים")]}];function zt(n,t,e,i,s){return{key:n,label:t,type:"number",min:e,max:i,step:s}}function fn(n,t){return{key:n,type:"bool",label:t}}function ge(n,t,e,i=!1){return{key:n,type:"material",label:t,categories:e,legFilter:i}}function Pd(n){return n==="free"?{id:n,name:Ml.free,blurb:"סצנה ריקה, בלי סימטריה",fields:[]}:Ma.find(t=>t.id===n)??Ma[0]}function Fh(n){switch(n){case"table":return{length:140,depth:80,height:75,topThickness:1.8,topMaterial:"ply18",legKind:"wood",legMaterial:"pine50x50",inset:5,apron:!0,apronHeight:8,apronMaterial:"ply18",stretcher:!1};case"bench":return{length:120,depth:36,height:45,topThickness:2.5,topMaterial:"pine25x100",legKind:"wood",legMaterial:"pine50x50",inset:4,stretcher:!0};case"shelf":return{length:80,depth:30,height:180,shelves:4,boardMaterial:"ply18",back:!0,backMaterial:"ply9",plinth:0};case"cabinet":return{length:80,depth:56,height:200,shelves:2,doors:"2",drawers:0,boardMaterial:"mel18",doorMaterial:"mel18",back:!0,backMaterial:"ply9",plinth:8};case"bed":return{length:160,depth:200,height:40,headboard:100,footboard:45,slats:14,legMaterial:"pine50x50",railMaterial:"pine50x100",panelMaterial:"ply18",slatMaterial:"pine25x50"};case"desk":return{length:140,depth:60,height:75,topThickness:1.8,topMaterial:"ply18",pedestal:"right",pedestalWidth:42,drawers:3,boardMaterial:"mel18",doorMaterial:"mel18",modesty:!0,legKind:"wood",legMaterial:"pine50x50",apron:!0};case"tv":return{length:160,depth:42,height:48,shelves:1,doors:"2",drawers:0,boardMaterial:"mel18",doorMaterial:"mel18",back:!0,plinth:4,cableGap:!0};case"workbench":return{length:160,depth:70,height:85,topThickness:5,topMaterial:"pine50x100",legKind:"steel",legMaterial:"st40x40x2",stretcher:!0,lowerShelf:!0};case"stool":return{length:36,depth:36,height:45,topThickness:1.8,topMaterial:"ply18",legKind:"wood",legMaterial:"pine50x50",stretcher:!0};case"free":return{}}}function Ld(n,t,e){switch(n){case"table":return Sa(t,e,!1);case"bench":return Sa(t,e,!0);case"shelf":return Ks(t,e,{doors:0,drawers:0});case"cabinet":return Ks(t,e,{});case"tv":return Ks(t,e,{cable:!0});case"bed":return Ud(t,e);case"desk":return Nd(t,e);case"workbench":return zd(t,e);case"stool":return Fd(t,e);case"free":return[]}}function Dd(n){return n==="steel"?"st40x40x2":n==="aluminum"?"al40x40x2":"pine50x50"}function se(n,t,e,i,s){const r=Number(n[t]);return Ju(Number.isFinite(r)?r:s,e,i)}function ti(n,t,e){return typeof n[t]=="boolean"?n[t]:e}function $e(n,t,e){return typeof n[t]=="string"?n[t]:e}function Ht(n,t,e,i,s,r,o,a,l,c,h,u){if(o<.2||a<.2||l<.2)return null;const d={x:o,y:a,z:l},f=["x","y","z"].reduce((g,_)=>d[_]>d[g]?_:g);return{id:n,name:t,role:e,origin:"template",position:{x:i,y:s,z:r},size:d,materialId:c,longAxis:f,thicknessAxis:u,explode:h}}function Vt(n,t){t&&n.push(t)}function Sl(n,t){if(n.category==="sheet"){const i=Qe(n);return Math.max(1,Math.round(t/i))*i}const e=qe(n);return e?Math.min(e.w,e.h):t}function Ks(n,t,e){const i=e.w??se(n,"length",20,400,80),s=e.d??se(n,"depth",15,120,40),r=e.h??se(n,"height",20,300,80),o=e.ox??0,a=e.oy??0,l=e.oz??0,c=e.idPrefix??"",h=Ce(t,$e(n,"boardMaterial","ply18"),"sheet"),u=Ce(t,$e(n,"backMaterial","ply9"),"sheet"),d=Ce(t,$e(n,"doorMaterial",h.id),"sheet"),f=Qe(h),g=ti(n,"back",!0),_=Qe(u),m=se(n,"plinth",0,r/2,0),p=e.doors??Math.round(se(n,"doors",0,2,0)),S=e.drawers??Math.round(se(n,"drawers",0,8,0)),v=p>0||S>0?Qe(d):0,x=Math.max(8,s-v),D=[],T=et=>`${c}${et}`;Vt(D,Ht(T("side-l"),"דופן","side",o,a,l,f,r,x,h.id,{x:-1,y:0,z:0},"x")),Vt(D,Ht(T("side-r"),"דופן","side",o+i-f,a,l,f,r,x,h.id,{x:1,y:0,z:0},"x"));const A=i-2*f,P=g?_:0,E=x-P;Vt(D,Ht(T("bottom"),"תחתית","bottom",o+f,a+m,l+P,A,f,E,h.id,{x:0,y:-.4,z:0},"y")),Vt(D,Ht(T("top"),"דופן עליונה","top",o+f,a+r-f,l+P,A,f,E,h.id,{x:0,y:1,z:0},"y"));const y=m+f,F=r-f-y;let z=0,O=0;if(S>0&&F>24){const et=p>0?F*.62:F;z=S,O=Math.min(22,et/z),O<10&&(z=Math.max(1,Math.floor(et/10)),O=Math.min(22,et/z))}const G=z*O;if(z>0){const et=a+m+G;Vt(D,Ht(T("divider"),"מחיצה","divider",o+f,et,l+P,A,f,E,h.id,{x:0,y:.2,z:.3},"y"));for(let st=0;st<z;st++)Id(D,{id:T(`drawer-${st}`),x:o,y:a+m+st*O,z:l,w:i,d:x,h:O,T:f,faceT:v,zBack:P,boardId:h.id,faceId:d.id,index:st})}const W=m+(z>0?G+f:f),V=r-f-W;let J=Math.round(se(n,"shelves",0,12,0));for(;J>0&&V-J*f<J*8;)J--;if(V>f+8&&J>0){const et=(V-J*f)/(J+1);for(let st=0;st<J;st++){const Pt=a+W+(st+1)*et+st*f;Vt(D,Ht(T(`shelf-${st}`),"מדף","shelf",o+f,Pt,l+P,A,f,E,h.id,{x:0,y:(st-(J-1)/2)*.15,z:.55},"y"))}}if(g){const et=a+m+f+(e.cable&&ti(n,"cableGap",!1)?Math.min(6,F/3):0),st=a+r-f;Vt(D,Ht(T("back"),"גב","back",o+f,et,l,A,st-et,_,u.id,{x:0,y:0,z:-1},"z"))}if(m>1){const et=Math.min(4,x/4);Vt(D,Ht(T("plinth"),"צוקל","plinth",o+f,a,l+x-et-f,A,m,f,h.id,{x:0,y:-.3,z:.8},"z"))}if(p===1||p===2){const st=a+m+G+.25,Pt=a+r-.25-st,Zt=l+x;if(p===1)Vt(D,Ht(T("door-0"),"דלת","door",o+.25,st,Zt,i-.25*2,Pt,v,d.id,{x:0,y:0,z:1.3},"z"));else{const nt=(i-.5-.3)/2;Vt(D,Ht(T("door-0"),"דלת","door",o+.25,st,Zt,nt,Pt,v,d.id,{x:-.35,y:0,z:1.3},"z")),Vt(D,Ht(T("door-1"),"דלת","door",o+.25+nt+.3,st,Zt,nt,Pt,v,d.id,{x:.35,y:0,z:1.3},"z"))}}return D}function Id(n,t){const i=t.y+.2,s=t.h-.2*2,r=1.15+t.index*.08;Vt(n,Ht(`${t.id}-front`,"חזית מגירה","drawer-front",t.x+.2,i,t.z+t.d,t.w-.2*2,s,t.faceT,t.faceId,{x:0,y:0,z:r},"z"));const o=t.T,a=1.3,l=t.x+t.T+a,c=t.x+t.w-t.T-a,h=t.z+t.zBack+.4,d=t.z+t.d-.3-h,f=Math.max(4,s-2.5),g=i+1.2;d<8||c-l<8||(Vt(n,Ht(`${t.id}-sl`,"צד מגירה","drawer-side",l,g,h,o,f,d,t.boardId,{x:-.4,y:0,z:r*.7},"x")),Vt(n,Ht(`${t.id}-sr`,"צד מגירה","drawer-side",c-o,g,h,o,f,d,t.boardId,{x:.4,y:0,z:r*.7},"x")),Vt(n,Ht(`${t.id}-back`,"גב מגירה","drawer-back",l+o,g,h,c-l-2*o,f,o,t.boardId,{x:0,y:0,z:r*.45},"z")),Vt(n,Ht(`${t.id}-bot`,"תחתית מגירה","drawer-bottom",l+o,g,h+o,c-l-2*o,Math.min(o,1.2),d-o,t.boardId,{x:0,y:-.2,z:r*.6},"y")))}function Sa(n,t,e){const i=se(n,"length",30,400,e?120:140),s=se(n,"depth",20,200,e?36:80),r=se(n,"height",25,130,e?45:75),o=Ce(t,$e(n,"topMaterial","ply18"),"sheet"),a=Ce(t,$e(n,"legMaterial","pine50x50"),"lumber"),l=Ce(t,$e(n,"apronMaterial","ply18"),"sheet"),c=Sl(o,se(n,"topThickness",.9,8,e?2.5:1.8)),h=qe(a)??{w:5,h:5},u=Math.max(0,Math.min(i,s)/2-h.w-2),d=se(n,"inset",0,u,Math.min(5,u)),f=[];Vt(f,Ht("top",e?"מושב":"משטח",e?"seat":"top",0,r-c,0,i,c,s,o.id,{x:0,y:1,z:0},"y"));const _=r-c;if([{x:d,z:d,ex:{x:-1,y:-.15,z:-1}},{x:i-d-h.w,z:d,ex:{x:1,y:-.15,z:-1}},{x:d,z:s-d-h.h,ex:{x:-1,y:-.15,z:1}},{x:i-d-h.w,z:s-d-h.h,ex:{x:1,y:-.15,z:1}}].forEach((p,S)=>{Vt(f,Ht(`leg-${S}`,"רגל","leg",p.x,0,p.z,h.w,_,h.h,a.id,p.ex))}),!e&&ti(n,"apron",!0)){let p,S;if(l.category==="sheet")p=se(n,"apronHeight",4,Math.max(4,r/2),8),S=Qe(l);else{const P=qe(l)??{w:2.5,h:10};S=Math.min(P.w,P.h),p=Math.max(P.w,P.h)}const v=r-c-p,x=d+S,D=d+S,T=i-2*(d+S),A=s-2*(d+S);Vt(f,Ht("apron-f","סינר","apron",x,v,s-d-S,T,p,S,l.id,{x:0,y:.2,z:1},"z")),Vt(f,Ht("apron-b","סינר","apron",x,v,d,T,p,S,l.id,{x:0,y:.2,z:-1},"z")),Vt(f,Ht("apron-l","סינר","apron",d,v,D,S,p,A,l.id,{x:-1,y:.2,z:0},"x")),Vt(f,Ht("apron-r","סינר","apron",i-d-S,v,D,S,p,A,l.id,{x:1,y:.2,z:0},"x"))}if(ti(n,"stretcher",e)){const p=qe(a)??{w:5,h:5},S=Math.min(p.w,p.h),v=Math.min(Math.max(p.w,p.h),8),x=Math.min(14,_*.28),D=d+h.w,T=i-2*(d+h.w),A=s/2-S/2;if(Vt(f,Ht("stretcher","קורת חיבור","stretcher",D,x,A,T,v,S,a.id,{x:0,y:-.6,z:0})),e){const P=s-2*(d+h.h);Vt(f,Ht("stretcher-l","קורת חיבור","stretcher",d,x,d+h.h,S,v,P,a.id,{x:-.6,y:-.4,z:0})),Vt(f,Ht("stretcher-r","קורת חיבור","stretcher",i-d-S,x,d+h.h,S,v,P,a.id,{x:.6,y:-.4,z:0}))}}return f}function Ud(n,t){const e=se(n,"length",70,220,160),i=se(n,"depth",180,240,200),s=se(n,"height",25,80,40),r=se(n,"headboard",30,180,100),o=se(n,"footboard",15,140,45),a=Math.round(se(n,"slats",4,30,14)),l=Ce(t,$e(n,"legMaterial","pine50x50"),"lumber"),c=Ce(t,$e(n,"railMaterial","pine50x100"),"lumber"),h=Ce(t,$e(n,"panelMaterial","ply18"),"sheet"),u=Ce(t,$e(n,"slatMaterial","pine25x50"),"lumber"),d=qe(l)??{w:5,h:5},f=h.category==="sheet"?Qe(h):Math.min(...Object.values(qe(h)??{w:2.5,h:10}));let g,_;if(c.category==="sheet")g=15,_=Qe(c);else{const O=qe(c)??{w:5,h:10};g=Math.max(O.w,O.h),_=Math.min(O.w,O.h)}const m=qe(u)??{w:2.5,h:5},p=Math.min(m.w,m.h),S=Math.max(m.w,m.h),v=[],x=Math.max(s,d.w),D=f,T=i-f-d.h;[{x:0,z:D,ex:{x:-1,y:0,z:-.6}},{x:e-d.w,z:D,ex:{x:1,y:0,z:-.6}},{x:0,z:T,ex:{x:-1,y:0,z:.6}},{x:e-d.w,z:T,ex:{x:1,y:0,z:.6}}].forEach((O,G)=>Vt(v,Ht(`leg-${G}`,"רגל","leg",O.x,0,O.z,d.w,x,d.h,l.id,O.ex)));const P=s-g,E=D+d.h,y=T-E;Vt(v,Ht("rail-l","קורת צד","rail",0,P,E,_,g,y,c.id,{x:-1,y:0,z:0},c.category==="sheet"?"x":void 0)),Vt(v,Ht("rail-r","קורת צד","rail",e-_,P,E,_,g,y,c.id,{x:1,y:0,z:0},c.category==="sheet"?"x":void 0)),Vt(v,Ht("head","ראש מיטה","headboard",0,0,0,e,Math.max(r,s),f,h.id,{x:0,y:.3,z:-1},"z")),Vt(v,Ht("foot","מרגלות","footboard",0,0,i-f,e,Math.max(o,20),f,h.id,{x:0,y:.2,z:1},"z"));const L=s-p,F=e-2*_,z=y/a;for(let O=0;O<a;O++){const G=E+O*z+Math.max(0,(z-S)/2);Vt(v,Ht(`slat-${O}`,"שלב","slat",_,L,G,F,p,Math.min(S,z-.4),u.id,{x:0,y:.7,z:0}))}return v}function Nd(n,t){const e=se(n,"length",70,280,140),i=se(n,"depth",40,100,60),s=se(n,"height",60,90,75),r=Ce(t,$e(n,"topMaterial","ply18"),"sheet"),o=Sl(r,se(n,"topThickness",1.2,5,1.8)),a=$e(n,"pedestal","right");let l=se(n,"pedestalWidth",30,70,42);const c=[];Vt(c,Ht("top","משטח","top",0,s-o,0,e,o,i,r.id,{x:0,y:1,z:0},"y"));const h=s-o,u=a==="left"||a==="both",d=a==="right"||a==="both";u&&d&&(l=Math.min(l,(e-40)/2));const f={...n,plinth:0,back:!0,shelves:0,doors:"0"};u&&c.push(...Ks(f,t,{idPrefix:"L-",ox:0,w:l,d:i,h,drawers:Math.round(se(n,"drawers",1,5,3)),doors:0})),d&&c.push(...Ks(f,t,{idPrefix:"R-",ox:e-l,w:l,d:i,h,drawers:Math.round(se(n,"drawers",1,5,3)),doors:0}));const g=Ce(t,$e(n,"legMaterial","pine50x50"),"lumber"),_=qe(g)??{w:5,h:5},m=4,p=[];if(u||(p.push({x:m,z:m,ex:{x:-1,y:0,z:-1}}),p.push({x:m,z:i-m-_.h,ex:{x:-1,y:0,z:1}})),d||(p.push({x:e-m-_.w,z:m,ex:{x:1,y:0,z:-1}}),p.push({x:e-m-_.w,z:i-m-_.h,ex:{x:1,y:0,z:1}})),p.forEach((S,v)=>Vt(c,Ht(`leg-${v}`,"רגל","leg",S.x,0,S.z,_.w,h,_.h,g.id,S.ex))),!u&&!d&&ti(n,"apron",!0)){const x=h-8;Vt(c,Ht("apron-f","סינר","apron",m+_.w,x,i-m-_.h,e-2*(m+_.w),8,1.8,r.id,{x:0,y:0,z:1},"z")),Vt(c,Ht("apron-b","סינר","apron",m+_.w,x,m,e-2*(m+_.w),8,1.8,r.id,{x:0,y:0,z:-1},"z"))}if(ti(n,"modesty",!0)){const S=Ce(t,$e(n,"boardMaterial","mel18"),"sheet"),v=Qe(S),x=u?l:m+_.w,D=d?e-l:e-m-_.w,T=Math.min(28,h*.4);Vt(c,Ht("modesty","פאנל אחורי","modesty",x,h-T,2,Math.max(0,D-x),T,v,S.id,{x:0,y:0,z:-1},"z"))}return c}function zd(n,t){const e=se(n,"length",60,360,160),i=se(n,"depth",40,120,70),s=se(n,"height",60,110,85),r=Ce(t,$e(n,"topMaterial","pine50x100"),"lumber"),o=Sl(r,se(n,"topThickness",1.8,8,5)),a=Ce(t,$e(n,"legMaterial","st40x40x2"),"tube"),l=qe(a)??{w:4,h:4},c=2,h=[];Vt(h,Ht("top","משטח","top",0,s-o,0,e,o,i,r.id,{x:0,y:1,z:0},"y"));const u=s-o;if([{x:c,z:c,ex:{x:-1,y:-.2,z:-1}},{x:e-c-l.w,z:c,ex:{x:1,y:-.2,z:-1}},{x:c,z:i-c-l.h,ex:{x:-1,y:-.2,z:1}},{x:e-c-l.w,z:i-c-l.h,ex:{x:1,y:-.2,z:1}}].forEach((f,g)=>Vt(h,Ht(`leg-${g}`,"רגל","leg",f.x,0,f.z,l.w,u,l.h,a.id,f.ex))),ti(n,"stretcher",!0)){const f=Math.min(l.w,l.h),g=Math.min(l.w,l.h);[10,Math.max(16,u-12)].forEach((m,p)=>{const S=c+l.w,v=c+l.h,x=e-2*(c+l.w),D=i-2*(c+l.h),T=p===0?-.4:.3;Vt(h,Ht(`st-f-${p}`,"קורה","stretcher",S,m,i-c-l.h,x,f,g,a.id,{x:0,y:T,z:.7})),Vt(h,Ht(`st-b-${p}`,"קורה","stretcher",S,m,c,x,f,g,a.id,{x:0,y:T,z:-.7})),Vt(h,Ht(`st-l-${p}`,"קורה","stretcher",c,m,v,g,f,D,a.id,{x:-.7,y:T,z:0})),Vt(h,Ht(`st-r-${p}`,"קורה","stretcher",e-c-g,m,v,g,f,D,a.id,{x:.7,y:T,z:0}))})}if(ti(n,"lowerShelf",!0)){const f=Ce(t,"ply18","sheet"),g=Qe(f),_=c+l.w,m=c+l.h;Vt(h,Ht("lower","מדף תחתון","shelf",_,10+Math.min(l.w,l.h),m,e-2*(c+l.w),g,i-2*(c+l.h),f.id,{x:0,y:-.5,z:0},"y"))}return h}function Fd(n,t){const e={...n,apron:!1,stretcher:ti(n,"stretcher",!0)};return Sa(e,t,!0).filter(s=>s.id==="top"||s.role==="leg"||s.role==="stretcher")}function Oh(n){return Ml[n]}function As(n,t,e){const i={id:Mi("prj"),name:e??Oh(n),nameCustom:!!e,templateId:n,params:Fh(n),detached:!1,parts:[],materialOverrides:{},hardwareOverrides:{},stock:xd(),referenceOpacity:.45,referenceWidthCm:0,referenceOffset:{x:0,y:0,z:0},createdAt:Date.now(),updatedAt:Date.now()};return An(i,t),i}function Bh(n,t="עיצוב חופשי"){const e=As("free",n,t);return e.detached=!0,e.parts=[],e}function An(n,t){if(n.detached)return;const e=n.parts.filter(s=>s.origin==="user"),i=Ld(n.templateId,n.params,t);n.parts=[...i,...e].map(s=>Od(s,n,t))}function Od(n,t,e){const i=t.materialOverrides[n.id];if(!i)return n;const s=ze(e,i);return s?Ih(n,s):n}const tc={topMaterial:["top","seat"],legMaterial:["leg","stretcher"],apronMaterial:["apron"],boardMaterial:["side","bottom","shelf","top","plinth","divider","back","drawer-side","drawer-back","drawer-bottom","modesty"],backMaterial:["back"],doorMaterial:["door","drawer-front"],railMaterial:["rail"],panelMaterial:["headboard","footboard"],slatMaterial:["slat"]};function Bd(n,t,e,i){if(e==="legKind"&&typeof i=="string")n.params.legKind=i,n.params.legMaterial=Dd(i),ec(n,tc.legMaterial);else{n.params[e]=i;const s=tc[e];s&&ec(n,s)}n.updatedAt=Date.now(),An(n,t)}function ec(n,t){for(const e of n.parts)t.includes(e.role)&&delete n.materialOverrides[e.id]}function kh(n,t,e){n.templateId=t,n.params=Fh(t),n.detached=!1,n.materialOverrides={},n.parts=n.parts.filter(i=>i.origin==="user"),n.nameCustom||(n.name=Oh(t)),n.updatedAt=Date.now(),An(n,e)}function kd(n,t){n.detached=!1,n.updatedAt=Date.now(),An(n,t)}function Lo(n,t,e){return ze(n,t)?.id??n.find(i=>i.category===e)?.id??n[0]?.id??t}function Hd(n){const t=Bh(n,"ספסל לא סימטרי"),e=Lo(n,"ply18","sheet"),i=Lo(n,"pine50x50","lumber"),s=Lo(n,"st40x40x2","tube"),r={id:"brace",name:"חיזוק אלכסוני",role:"stretcher",origin:"user",position:{x:52.126,y:-3.52,z:15.5},size:{x:5,y:80,z:5},materialId:i,longAxis:"y",rotation:{x:0,y:0,z:38},explode:{x:.2,y:.4,z:.2}},o=ya(r),a=o[0].y<=o[1].y?o[0]:o[1];return t.parts=[{id:"top",name:"משטח",role:"top",origin:"user",position:{x:0,y:70,z:0},size:{x:120,y:1.8,z:46},materialId:e,longAxis:"x",thicknessAxis:"y",explode:{x:0,y:1,z:0}},{id:"leg-a",name:"רגל קדמית",role:"leg",origin:"user",position:{x:6,y:0,z:4},size:{x:5,y:70,z:5},materialId:i,longAxis:"y",explode:{x:-.8,y:0,z:-.4}},{id:"leg-low",name:"רגל אל החיזוק",role:"leg",origin:"user",position:{x:a.x-2.5,y:0,z:a.z-2.5},size:{x:5,y:70,z:5},materialId:i,longAxis:"y",explode:{x:.6,y:0,z:.2}},{id:"post",name:"עמוד קצר",role:"leg",origin:"user",position:{x:96,y:0,z:28},size:{x:5,y:48,z:5},materialId:i,longAxis:"y",explode:{x:.8,y:0,z:.7}},r,{id:"rail",name:"צינור אלכסוני",role:"custom",origin:"user",position:{x:18,y:16,z:6},size:{x:64,y:4,z:4},materialId:s,longAxis:"x",rotation:{x:0,y:-24,z:0},explode:{x:0,y:-.3,z:.5}},{id:"shelf",name:"מדף צד",role:"shelf",origin:"user",position:{x:4,y:28,z:2},size:{x:32,y:1.8,z:16},materialId:e,longAxis:"x",thicknessAxis:"y",explode:{x:-.4,y:0,z:-.6}}],t}const pr=680,Do=460;function Hh(n,t){return n.length===0?'<p class="empty">אין חלקים לשרטוט. בחרו תבנית או הוסיפו חלק.</p>':[Io(n,t,"front","חזית"),Io(n,t,"side","צד"),Io(n,t,"top","מבט על")].join("")}function Io(n,t,e,i){const s=n.map(F=>Vd(F,t,e)),r=s.flatMap(F=>F.points.map(z=>z[0])),o=s.flatMap(F=>F.points.map(z=>z[1])),a=Math.min(...r),l=Math.max(...r),c=Math.min(...o),h=Math.max(...o),u=Math.max(1,l-a),d=Math.max(1,h-c),f=78,g=86,_=36,m=78,p=Math.min((pr-f-g)/u,(Do-_-m)/d),S=u*p,v=d*p,x=f+(pr-f-g-S)/2,D=_+(Do-_-m-v)/2,T=F=>x+(F-a)*p,A=F=>D+(h-F)*p,P=s.map(F=>`<polygon points="${F.points.map(([O,G])=>`${T(O).toFixed(2)},${A(G).toFixed(2)}`).join(" ")}" fill="${F.color}" fill-opacity="0.9" stroke="#2c2118" stroke-width="1.2"/>`).join(""),E=ba(T(a),A(c)+36,T(l),A(c)+36,Kt(u),!1),y=ba(T(l)+36,A(c),T(l)+36,A(h),Kt(d),!0),L=e==="front"?Gd(n,A,x):"";return`<figure class="drawing">
    <svg viewBox="0 0 ${pr} ${Do}" role="img" aria-label="${Ct(i)}">
      <rect width="100%" height="100%" fill="#fffaf3"/>
      ${P}
      ${L}
      ${E}
      ${y}
      <text x="16" y="28" font-size="18" font-family="Rubik, sans-serif" fill="#241910">${Ct(i)}</text>
      <text x="${pr-16}" y="28" text-anchor="end" font-size="13" font-family="Rubik, sans-serif" fill="#6e5c4c">${n.some(Bi)?'היטל, ס"מ':'ס"מ'}</text>
    </svg>
  </figure>`}function Vd(n,t,e){const i=ze(t,n.materialId)?.color??"#c4a574",s=e==="side"?"z":"x",r=e==="top"?"z":"y",o=ir(n).map(a=>[a[s],a[r]]);return{points:Ph(o),color:i}}function ba(n,t,e,i,s,r){const o=(n+e)/2,a=(t+i)/2,l=r?-90:0;return`<g class="dim" fill="none">
    ${r?`<line x1="${n-10}" y1="${t}" x2="${n+8}" y2="${t}" stroke="#8a7560" stroke-width="0.8"/>
       <line x1="${e-10}" y1="${i}" x2="${e+8}" y2="${i}" stroke="#8a7560" stroke-width="0.8"/>`:`<line x1="${n}" y1="${t-8}" x2="${n}" y2="${t+12}" stroke="#8a7560" stroke-width="0.8"/>
       <line x1="${e}" y1="${i-8}" x2="${e}" y2="${i+12}" stroke="#8a7560" stroke-width="0.8"/>`}
    <line x1="${n}" y1="${t}" x2="${e}" y2="${i}" stroke="#241910" stroke-width="1"/>
    <polyline points="${nc(n,t,e,i)}" fill="none" stroke="#241910" stroke-width="1"/>
    <polyline points="${nc(e,i,n,t)}" fill="none" stroke="#241910" stroke-width="1"/>
    <text x="${o}" y="${a-(r?0:8)}" transform="rotate(${l} ${o} ${a-(r?0:8)})" text-anchor="middle" font-size="14" font-family="Rubik, sans-serif" fill="#241910" stroke="#fffaf3" stroke-width="4" paint-order="stroke">${s}</text>
  </g>`}function nc(n,t,e,i){const s=Math.atan2(i-t,e-n),r=8,o=.45,a=n+Math.cos(s+o)*r,l=t+Math.sin(s+o)*r,c=n+Math.cos(s-o)*r,h=t+Math.sin(s-o)*r;return`${a.toFixed(1)},${l.toFixed(1)} ${n.toFixed(1)},${t.toFixed(1)} ${c.toFixed(1)},${h.toFixed(1)}`}function Gd(n,t,e){const i=new Set;for(const o of n)if(!(o.role==="slat"||o.role==="drawer-side"||o.role==="drawer-back"||o.role==="drawer-bottom"))if(Bi(o))for(const a of ir(o))i.add(Math.round(a.y*10)/10);else i.add(Math.round(o.position.y*10)/10),i.add(Math.round((o.position.y+o.size.y)*10)/10);const s=[...i].sort((o,a)=>o-a);if(s.length<2||s.length>8)return"";for(let o=1;o<s.length;o++)if(s[o]-s[o-1]<2)return"";const r=Math.max(18,e-46);return s.slice(0,-1).map((o,a)=>ba(r,t(o),r,t(s[a+1]),Kt(s[a+1]-o),!0)).join("")}const Wd="1.1.0",Xd={version:Wd},mo=Xd.version;function $d(n,t,e){const i=po(n,t),s=new Date().toLocaleDateString("he-IL"),r=e?`<img class="shot" alt="מבט תלת־ממד" src="${e}" />`:'<p class="empty">אין צילום תלת־ממד.</p>';return`
    <header class="report-head">
      <p class="eyebrow">רהיטים · גרסה ${Ct(mo)}</p>
      <h1>${Ct(n.name)}</h1>
      <p>${Ct(Ml[n.templateId])} · ${Ct(s)}</p>
      <p class="dims">${Kt(i.bounds.length)} × ${Kt(i.bounds.depth)} × ${Kt(i.bounds.height)} ס"מ · ${Dn(i.totalWeightKg)}</p>
    </header>
    <section>
      <h2>מבט תלת־ממד</h2>
      ${r}
    </section>
    <section>
      <h2>שרטוטים</h2>
      <div class="draw-grid">${Hh(n.parts,t)}</div>
    </section>
    <section>
      <h2>כתב כמויות</h2>
      ${Yd(i)}
      <p class="total">משקל כולל ${Dn(i.totalWeightKg)}</p>
    </section>
    <section>
      <h2>פריסת חיתוך — קורות וצינורות</h2>
      ${Gh(i)}
    </section>
    <section>
      <h2>פריסת לוחות</h2>
      ${Wh(i)}
    </section>
    <section>
      <h2>פרזול</h2>
      ${qd(i)}
      <p class="hint">כמויות הפרזול הן הערכה לפי סוג החלקים. אפשר לערוך אותן במסך לפני ההדפסה. המשקל מחושב מנפח החלק ומצפיפות החומר בספרייה.</p>
    </section>`}function Yd(n){return n.lines.length===0?'<p class="empty">אין חלקים.</p>':`<table>
    <thead><tr><th>חלק</th><th>חומר</th><th>מידה</th><th>כמות</th><th>משקל</th><th>סה"כ</th></tr></thead>
    <tbody>${n.lines.map(e=>`<tr>
        <td>${Ct(e.name)}</td>
        <td>${Ct(e.materialName)}</td>
        <td>${Ct(e.sizeLabel)}</td>
        <td>${e.qty}</td>
        <td>${Dn(e.unitWeightKg)}</td>
        <td>${Dn(e.totalWeightKg)}</td>
      </tr>`).join("")}</tbody>
  </table>`}function Vh(n){return`<h2>פריסת קורות וצינורות</h2>${Gh(n)}<h2>פריסת לוחות</h2>${Wh(n)}`}function Gh(n){return n.linear.length===0?'<p class="empty">אין קורות, צינורות או פסים.</p>':n.linear.map(t=>{const e=t.pieces.map(s=>`<li>${Ct(s.name)} · ${Kt(s.lengthCm)} ס"מ × ${s.qty}</li>`).join(""),i=t.bars.map((s,r)=>{const o=s.overflow?`מוט ${r+1}: החלק ארוך מהמוט (${Kt(s.cuts[0]?.lengthCm??0)} ס"מ)`:`מוט ${r+1}: פחת ${Kt(s.wasteCm)} ס"מ`,a=520,l=a/Math.max(s.stockLengthCm,s.usedCm,1),c=s.cuts.map((h,u)=>{const d=h.startCm*l,f=Math.max(1,h.lengthCm*l),g=s.overflow?"#9d2c2c":u%2?"#8a3f24":"#c4a574";return`<rect x="${d.toFixed(1)}" y="4" width="${f.toFixed(1)}" height="22" fill="${g}"><title>${Ct(h.name)} ${Kt(h.lengthCm)}</title></rect>`}).join("");return`<figure class="bar">
            <figcaption>${o}</figcaption>
            <svg viewBox="0 0 ${a} 30" role="img" aria-label="${Ct(o)}">
              <rect width="${(s.stockLengthCm*l).toFixed(1)}" height="30" fill="#f3eee6" stroke="#d9cbb8"/>
              ${c}
            </svg>
          </figure>`}).join("");return`<article class="cut-group">
        <h3>${Ct(t.materialName)}</h3>
        <p>אורך מוט ${Kt(t.stockLengthCm)} ס"מ · ${t.bars.length} מוטות</p>
        <ul>${e}</ul>
        ${i}
      </article>`}).join("")}function Wh(n){if(n.sheets.panels.length===0)return'<p class="empty">אין חלקי לוח.</p>';const t=`לוח ${Kt(Math.max(n.sheets.sheetLengthCm,n.sheets.sheetWidthCm))}×${Kt(Math.min(n.sheets.sheetLengthCm,n.sheets.sheetWidthCm))} ס"מ · מרווח ניסור ${Kt(n.sheets.kerfCm)} ס"מ · ${n.sheets.sheets.length} לוחות`,e=n.sheets.sheets.map((i,s)=>{const o=360/i.width,a=i.height*o,l=i.placements.map((h,u)=>{const d=h.overflow?"#f3d0d0":u%2?"#e7d3b4":"#f6efe4";return`<g>
            <rect x="${(h.x*o).toFixed(1)}" y="${(h.y*o).toFixed(1)}" width="${Math.max(1,h.w*o).toFixed(1)}" height="${Math.max(1,h.h*o).toFixed(1)}" fill="${d}" stroke="#2c2118"/>
            <text x="${(h.x*o+4).toFixed(1)}" y="${(h.y*o+14).toFixed(1)}" font-size="11" font-family="Rubik, sans-serif" fill="#241910">${Ct(h.name)} ${Kt(h.w)}×${Kt(h.h)}</text>
          </g>`}).join(""),c=i.overflow?`לוח ${s+1} — חלק לא נכנס`:`לוח ${s+1}`;return`<figure class="sheet">
        <figcaption>${c}</figcaption>
        <svg viewBox="0 0 360 ${a.toFixed(1)}" role="img" aria-label="${c}">
          <rect width="360" height="${a.toFixed(1)}" fill="#fffaf3" stroke="#c4b39e"/>
          ${l}
        </svg>
      </figure>`}).join("");return`<p>${t}</p>${e}`}function qd(n){return n.hardware.length===0?'<p class="empty">אין פרזול משוער.</p>':`<table><thead><tr><th>פריט</th><th>כמות</th><th>הערה</th></tr></thead><tbody>${n.hardware.map(e=>`<tr><td>${Ct(e.name)}</td><td>${e.qty}</td><td>${Ct(e.note)}</td></tr>`).join("")}</tbody></table>`}function Zd(n,t,e){const i=Pd(n.templateId),r=`<button type="button" class="template-card ${n.templateId==="free"?"on":""}" data-action="free">
      <strong>עיצוב חופשי</strong>
      <span>סצנה ריקה. כל חלק עומד בפני עצמו, בלי סימטריה.</span>
    </button>`+Ma.map(h=>`<button type="button" class="template-card ${h.id===n.templateId?"on":""}" data-action="template" data-id="${h.id}">
      <strong>${Ct(h.name)}</strong>
      <span>${Ct(h.blurb)}</span>
    </button>`).join(""),o=n.templateId==="free"?'<div class="banner"><p>עיצוב חופשי. הוסיפו חלקים וסובבו כל אחד בנפרד, מכל זווית.</p></div>':n.detached?'<div class="banner"><p>החלקים עצמאיים. אין סימטריה כפויה, ושינוי מידות התבנית לא יזיז אותם.</p><button type="button" data-action="reset">איפוס למידות התבנית</button></div>':'<div class="banner"><p>התבנית שומרת על הסידור שלה. שחרור הופך כל חלק לעצמאי.</p><button type="button" data-action="unlock">שחרור חלקים לעריכה חופשית</button></div>',a=i.fields.map(h=>jd(h,n,t)).join(""),l=i.fields.length?`<h2>מידות ואפשרויות</h2><div class="fields">${a}</div>`:'<p class="hint">אין מידות של תבנית. בחרו חלק בתלת־ממד והזיזו, שנו מידה או סובבו אותו בחופשיות.</p>',c=n.parts.map(h=>{const u=t.map(f=>`<option value="${Ct(f.id)}" ${f.id===h.materialId?"selected":""}>${Ct(f.name)}</option>`).join(""),d=`${h.locked?" · נעול":""}${Bi(h)?" · סובב":""}${h.groupId?" · בקבוצה":""}`;return`<li class="${e.includes(h.id)?"on":""}">
        <button type="button" data-action="select" data-id="${Ct(h.id)}">${Ct(h.name)}</button>
        <span>${Kt(h.size.x)}×${Kt(h.size.y)}×${Kt(h.size.z)}${d}</span>
        <select data-action="part-material" data-id="${Ct(h.id)}" aria-label="חומר ${Ct(h.name)}">${u}</select>
      </li>`}).join("");return`
    <section class="pane-block">
      <h2>תבנית</h2>
      <div class="template-grid">${r}</div>
      ${o}
      ${l}
      <h2>חלקים</h2>
      <ul class="part-list">${c}</ul>
      <details class="describe">
        <summary>תיאור במילים</summary>
        <p>אפשר לכתוב למשל "שולחן 140 על 80 גובה 75" או "ארון רוחב 90 עומק 55 גובה 200 עם 2 דלתות ו-3 מדפים". הזיהוי רץ במכשיר, בלי רשת ובלי מפתח. אפשר לחבר אחר כך מפרש חכם במקום הפונקציה המקומית.</p>
        <textarea id="describe-text" rows="3" placeholder="שולחן 140 על 80 גובה 75"></textarea>
        <button type="button" data-action="describe">החל תיאור</button>
      </details>
    </section>`}function jd(n,t,e){const i=t.params[n.key];if(n.type==="bool")return`<label class="check"><input type="checkbox" data-param="${n.key}" ${i?"checked":""}/> ${Ct(n.label)}</label>`;if(n.type==="number")return`<label>${Ct(n.label)} <span class="unit">ס"מ</span>
      <input class="num" type="number" data-param="${n.key}" min="${n.min}" max="${n.max}" step="${n.step}" value="${i??""}" />
    </label>`;if(n.type==="select"){const r=n.options.map(o=>`<option value="${Ct(o.value)}" ${String(i)===o.value?"selected":""}>${Ct(o.label)}</option>`).join("");return`<label>${Ct(n.label)} <select data-param="${n.key}">${r}</select></label>`}const s=Kd(e,n,t);return`<label>${Ct(n.label)} <select data-param="${n.key}">${s}</select></label>`}function Kd(n,t,e){let i=n.filter(o=>t.categories.includes(o.category));if(t.legFilter){const o=String(e.params.legKind??"wood");o==="wood"?i=i.filter(a=>a.category==="lumber"):o==="aluminum"?i=i.filter(a=>a.metal==="aluminum"):i=i.filter(a=>a.metal==="steel")}i.length===0&&(i=n);const s=String(e.params[t.key]??""),r=new Map;for(const o of i){const a=r.get(o.category)??[];a.push(o),r.set(o.category,a)}return[...r.entries()].map(([o,a])=>{const l=a.map(c=>`<option value="${Ct(c.id)}" ${c.id===s?"selected":""}>${Ct(c.name)}</option>`).join("");return`<optgroup label="${Ct(Uh(o))}">${l}</optgroup>`}).join("")}function Jd(n,t){const e=fo(n.parts);return`<section class="pane-block">
    <h2>שרטוטים</h2>
    <p class="hint">חזית, צד ומבט על. המידות בס"מ, מחוץ לקווי המתאר. השרטוט מתעדכן עם כל שינוי.</p>
    <p class="dims">${Kt(e.length)} × ${Kt(e.depth)} × ${Kt(e.height)} ס"מ</p>
    <div class="draw-grid">${Hh(n.parts,t)}</div>
  </section>`}function Qd(n,t){const e=po(n,t),i=e.lines.map(a=>`<tr>
        <td>${Ct(a.name)}</td>
        <td>${Ct(a.materialName)}</td>
        <td>${Ct(a.sizeLabel)}</td>
        <td>${a.qty}</td>
        <td>${Dn(a.unitWeightKg)}</td>
        <td>${Dn(a.totalWeightKg)}</td>
      </tr>`).join(""),s=e.lines.map(a=>`<article class="bom-card">
        <strong>${Ct(a.name)} × ${a.qty}</strong>
        <span>${Ct(a.materialName)}</span>
        <span>${Ct(a.sizeLabel)}</span>
        <span>${Dn(a.unitWeightKg)} ליחידה · ${Dn(a.totalWeightKg)}</span>
      </article>`).join(""),r=e.hardware.map(a=>`<label>${Ct(a.name)}
        <input class="num" type="number" min="0" step="1" data-hardware="${Ct(a.id)}" value="${a.qty}" />
        <span class="hint">${Ct(a.note)}</span>
      </label>`).join(""),o=n.stock;return`<section class="pane-block">
    <h2>כתב כמויות</h2>
    <p class="total">משקל כולל ${Dn(e.totalWeightKg)}</p>
    ${s?`<div class="bom-cards">${s}</div>`:""}
    ${i?`<div class="table-wrap bom-table"><table>
      <thead><tr><th>חלק</th><th>חומר</th><th>מידה</th><th>כמות</th><th>משקל</th><th>סה"כ</th></tr></thead>
      <tbody>${i}</tbody>
    </table></div>`:'<p class="empty">אין חלקים.</p>'}
    <h2>אורך מוט ומרווח ניסור</h2>
    <div class="fields">
      ${Xi("lumberLengthCm","אורך קרש",o.lumberLengthCm,20,1200)}
      ${Xi("metalLengthCm","אורך צינור",o.metalLengthCm,20,1200)}
      ${Xi("kerfMm",'רוחב ניסור בקורה (מ"מ)',o.kerfMm,0,10,.5)}
      ${Xi("sheetLengthCm","אורך לוח",o.sheetLengthCm,40,400)}
      ${Xi("sheetWidthCm","רוחב לוח",o.sheetWidthCm,20,250)}
      ${Xi("sheetKerfMm",'רוחב ניסור בלוח (מ"מ)',o.sheetKerfMm,0,10,.5)}
    </div>
    <div id="bom-results">${Vh(e)}</div>
    <h2>פרזול</h2>
    <div class="fields">${r||'<p class="empty">אין פרזול משוער.</p>'}</div>
    <p class="hint">הפרזול הוא הערכה: צירים לפי גובה הדלת, זוג מסילות למגירה, ארבעה פינים למדף, רגלית לכל רגל וברגים לפי מספר החלקים. המשקל משתמש בצפיפות של כל חומר — פלדה 7.85 גרם לסמ"ק, אלומיניום 2.70, ועץ לפי הסוג.</p>
  </section>`}function Xi(n,t,e,i,s,r=1){const o=n.includes("Mm")?"":'ס"מ';return`<label>${Ct(t)} ${o?`<span class="unit">${o}</span>`:""}
    <input class="num" type="number" data-stock="${n}" min="${i}" max="${s}" step="${r}" value="${e}" />
  </label>`}function tf(n,t){return Vh(po(n,t))}function ef(n,t,e,i){const s=n.map(o=>`<li class="${o.id===t?"on":""}">
        <button type="button" data-action="open-project" data-id="${Ct(o.id)}">${Ct(o.name)}</button>
        <span>${Ct(o.templateId)}</span>
      </li>`).join(""),r=e.find(o=>o.id===i)??e[0];return`<section class="pane-block">
    <h2>פרויקטים</h2>
    <p class="hint">הכל נשמר בדפדפן הזה. אין חשבון ואין שרת.</p>
    <div class="button-row">
      <button type="button" data-action="new">פרויקט חדש</button>
      <button type="button" data-action="duplicate">שכפול</button>
      <button type="button" data-action="export">ייצוא JSON</button>
      <label class="file">ייבוא JSON<input type="file" accept="application/json,.json" data-import /></label>
      <button type="button" class="danger" data-action="delete-project">מחיקה</button>
    </div>
    <ul class="part-list">${s}</ul>
    <h2>ספריית חומרים</h2>
    <label>חומר לעריכה
      <select data-action="edit-material">${e.map(o=>`<option value="${Ct(o.id)}" ${o.id===r.id?"selected":""}>${Ct(o.name)}</option>`).join("")}</select>
    </label>
    ${nf(r)}
    <div class="button-row">
      <button type="button" data-action="add-material">הוספת חומר</button>
      <button type="button" class="danger" data-action="delete-material">מחיקת חומר</button>
      <button type="button" data-action="reset-materials">איפוס ספרייה</button>
    </div>
  </section>`}function nf(n){const t=`
    <label>שם <input data-material="name" value="${Ct(n.name)}" /></label>
    <label>צפיפות (גרם לסמ"ק) <input class="num" type="number" min="0.05" max="25" step="0.01" data-material="density" value="${n.density}" /></label>
    <label>צבע <input type="color" data-material="color" value="${Ct(sf(n.color))}" /></label>`;return n.category==="sheet"?`<div class="fields">${t}
      <label>עובי (מ"מ) <input class="num" type="number" min="1" max="50" step="1" data-material="thicknessMm" value="${n.thicknessMm??18}" /></label>
    </div>`:n.category==="lumber"?`<div class="fields">${t}
      <label>חתך — צלע א' (מ"מ) <input class="num" type="number" min="5" max="300" step="1" data-material="sectionWmm" value="${n.sectionWmm??50}" /></label>
      <label>חתך — צלע ב' (מ"מ) <input class="num" type="number" min="5" max="300" step="1" data-material="sectionHmm" value="${n.sectionHmm??50}" /></label>
    </div>`:n.category==="tube"?`<div class="fields">${t}
      <label>רוחב חיצוני (מ"מ) <input class="num" type="number" min="8" max="200" step="1" data-material="outerWmm" value="${n.outerWmm??40}" /></label>
      <label>גובה חיצוני (מ"מ) <input class="num" type="number" min="8" max="200" step="1" data-material="outerHmm" value="${n.outerHmm??40}" /></label>
      <label>עובי דופן (מ"מ) <input class="num" type="number" min="0.5" max="12" step="0.1" data-material="wallMm" value="${n.wallMm??2}" /></label>
    </div>`:n.category==="flat"?`<div class="fields">${t}
      <label>רוחב (מ"מ) <input class="num" type="number" min="5" max="200" step="1" data-material="flatWmm" value="${n.flatWmm??40}" /></label>
      <label>עובי (מ"מ) <input class="num" type="number" min="1" max="20" step="0.5" data-material="flatTmm" value="${n.flatTmm??4}" /></label>
    </div>`:`<div class="fields">${t}
    <label>צלע א' (מ"מ) <input class="num" type="number" min="10" max="150" step="1" data-material="legAmm" value="${n.legAmm??40}" /></label>
    <label>צלע ב' (מ"מ) <input class="num" type="number" min="10" max="150" step="1" data-material="legBmm" value="${n.legBmm??40}" /></label>
    <label>עובי (מ"מ) <input class="num" type="number" min="1" max="15" step="0.5" data-material="wallMm" value="${n.wallMm??3}" /></label>
  </div>`}function sf(n){return/^#[0-9a-fA-F]{6}$/.test(n)?n:"#c4a574"}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="170",ps={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,ic=1,of=2,Xh=1,af=2,qn=3,xi=0,tn=1,In=2,mi=0,ms=1,sc=2,rc=3,oc=4,lf=5,Ii=100,cf=101,hf=102,uf=103,df=104,ff=200,pf=201,mf=202,gf=203,Ea=204,wa=205,_f=206,xf=207,vf=208,yf=209,Mf=210,Sf=211,bf=212,Ef=213,wf=214,Ta=0,Aa=1,Ca=2,ys=3,Ra=4,Pa=5,La=6,Da=7,$h=0,Tf=1,Af=2,gi=0,Cf=1,Rf=2,Pf=3,Lf=4,Df=5,If=6,Uf=7,Yh=300,Ms=301,Ss=302,Ia=303,Ua=304,go=306,Na=1e3,zi=1001,za=1002,wn=1003,Nf=1004,mr=1005,Un=1006,Uo=1007,Fi=1008,ei=1009,qh=1010,Zh=1011,sr=1012,El=1013,ki=1014,Kn=1015,lr=1016,wl=1017,Tl=1018,bs=1020,jh=35902,Kh=1021,Jh=1022,En=1023,Qh=1024,tu=1025,gs=1026,Es=1027,eu=1028,Al=1029,nu=1030,Cl=1031,Rl=1033,Zr=33776,jr=33777,Kr=33778,Jr=33779,Fa=35840,Oa=35841,Ba=35842,ka=35843,Ha=36196,Va=37492,Ga=37496,Wa=37808,Xa=37809,$a=37810,Ya=37811,qa=37812,Za=37813,ja=37814,Ka=37815,Ja=37816,Qa=37817,tl=37818,el=37819,nl=37820,il=37821,Qr=36492,sl=36494,rl=36495,iu=36283,ol=36284,al=36285,ll=36286,zf=3200,Ff=3201,su=0,Of=1,fi="",hn="srgb",Cs="srgb-linear",_o="linear",ae="srgb",$i=7680,ac=519,Bf=512,kf=513,Hf=514,ru=515,Vf=516,Gf=517,Wf=518,Xf=519,lc=35044,cc="300 es",Jn=2e3,so=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,cl=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function $f(n,t){return(n%t+t)%t}function No(n,t,e){return(1-e)*n+e*t}function Os(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yf={DEG2RAD:Js};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],v=s[4],x=s[7],D=s[2],T=s[5],A=s[8];return r[0]=o*_+a*S+l*D,r[3]=o*m+a*v+l*T,r[6]=o*p+a*x+l*A,r[1]=c*_+h*S+u*D,r[4]=c*m+h*v+u*T,r[7]=c*p+h*x+u*A,r[2]=d*_+f*S+g*D,r[5]=d*m+f*v+g*T,r[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Xt;function ou(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qf(){const n=ro("canvas");return n.style.display="block",n}const hc={};function $s(n){n in hc||(hc[n]=!0,console.warn(n))}function Zf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function jf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(n.r=Qn(n.r),n.g=Qn(n.g),n.b=Qn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(n.r=_s(n.r),n.g=_s(n.g),n.b=_s(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fi?_o:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const uc=[.64,.33,.3,.6,.15,.06],dc=[.2126,.7152,.0722],fc=[.3127,.329],pc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Cs]:{primaries:uc,whitePoint:fc,transfer:_o,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:dc,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:uc,whitePoint:fc,transfer:ae,toXYZ:pc,fromXYZ:mc,luminanceCoefficients:dc,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});let Yi;class Jf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=ro("canvas")),Yi.width=t.width,Yi.height=t.height;const i=Yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ro("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qn(e[i]/255)*255):e[i]=Qn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qf=0;class au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fo(s[o].image)):r.push(Fo(s[o]))}else r=Fo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class en extends Gi{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=zi,s=zi,r=Un,o=Fi,a=En,l=ei,c=en.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Rs(),this.name="",this.source=new au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Yh;en.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(f+1)/2,D=(p+1)/2,T=(h+d)/4,A=(u+_)/4,P=(g+m)/4;return v>x&&v>D?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=T/i,r=A/i):x>D?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=P/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=A/r,s=P/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends Gi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends ep{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lu extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const D=Math.sqrt(v),T=Math.atan2(D,p*S);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}const x=a*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,i=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Oo.copy(this).projectOnVector(t),this.sub(Oo)}reflect(t){return this.sub(Oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new R,gc=new Ue;class Ps{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),_r.subVectors(this.max,Bs),qi.subVectors(t.a,Bs),Zi.subVectors(t.b,Bs),ji.subVectors(t.c,Bs),ri.subVectors(Zi,qi),oi.subVectors(ji,Zi),Ei.subVectors(qi,ji);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!Bo(e,qi,Zi,ji,_r)||(e=[1,0,0,0,1,0,0,0,1],!Bo(e,qi,Zi,ji,_r))?!1:(xr.crossVectors(ri,oi),e=[xr.x,xr.y,xr.z],Bo(e,qi,Zi,ji,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new R,new R,new R,new R,new R,new R,new R,new R],vn=new R,gr=new Ps,qi=new R,Zi=new R,ji=new R,ri=new R,oi=new R,Ei=new R,Bs=new R,_r=new R,xr=new R,wi=new R;function Bo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){wi.fromArray(n,r);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ip=new Ps,ks=new R,ko=new R;class xo{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ip.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);const e=ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(ko)),this.expandByPoint(ks.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new R,Ho=new R,vr=new R,ai=new R,Vo=new R,yr=new R,Go=new R;class vo{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ho.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Ho);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=ai.dot(this.direction),l=-ai.dot(vr),c=ai.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ho).addScaledVector(vr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,s,r){Vo.subVectors(e,t),yr.subVectors(i,t),Go.crossVectors(Vo,yr);let o=this.direction.dot(Go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const l=a*this.direction.dot(yr.crossVectors(ai,yr));if(l<0)return null;const c=a*this.direction.dot(Vo.cross(ai));if(c<0||l+c>o)return null;const h=-a*ai.dot(Go);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,rp)}lookAt(t,e,i){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),li.crossVectors(i,ln),li.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),li.crossVectors(i,ln)),li.normalize(),Mr.crossVectors(ln,li),s[0]=li.x,s[4]=Mr.x,s[8]=ln.x,s[1]=li.y,s[5]=Mr.y,s[9]=ln.y,s[2]=li.z,s[6]=Mr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],v=i[7],x=i[11],D=i[15],T=s[0],A=s[4],P=s[8],E=s[12],y=s[1],L=s[5],F=s[9],z=s[13],O=s[2],G=s[6],W=s[10],Z=s[14],V=s[3],J=s[7],et=s[11],st=s[15];return r[0]=o*T+a*y+l*O+c*V,r[4]=o*A+a*L+l*G+c*J,r[8]=o*P+a*F+l*W+c*et,r[12]=o*E+a*z+l*Z+c*st,r[1]=h*T+u*y+d*O+f*V,r[5]=h*A+u*L+d*G+f*J,r[9]=h*P+u*F+d*W+f*et,r[13]=h*E+u*z+d*Z+f*st,r[2]=g*T+_*y+m*O+p*V,r[6]=g*A+_*L+m*G+p*J,r[10]=g*P+_*F+m*W+p*et,r[14]=g*E+_*z+m*Z+p*st,r[3]=S*T+v*y+x*O+D*V,r[7]=S*A+v*L+x*G+D*J,r[11]=S*P+v*F+x*W+D*et,r[15]=S*E+v*z+x*Z+D*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,D=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*S+i*v+s*x+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=S*A,t[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*A,t[12]=D*A,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,v=l*h,x=l*u,D=i.x,T=i.y,A=i.z;return s[0]=(1-(_+p))*D,s[1]=(f+x)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+v)*A,s[9]=(m-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Jn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===so)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Jn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let g,_;if(a===Jn)g=(o+r)*u,_=-2*u;else if(a===so)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ki=new R,yn=new ue,sp=new R(0,0,0),rp=new R(1,1,1),li=new R,Mr=new R,ln=new R,_c=new ue,xc=new Ue;class Tn{constructor(t=0,e=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let op=0;const vc=new R,Ji=new Ue,Wn=new ue,Sr=new R,Hs=new R,ap=new R,lp=new Ue,yc=new R(1,0,0),Mc=new R(0,1,0),Sc=new R(0,0,1),bc={type:"added"},cp={type:"removed"},Qi={type:"childadded",child:null},Wo={type:"childremoved",child:null};class be extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new R,e=new Tn,i=new Ue,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return vc.copy(t).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sr.copy(t):Sr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Hs,Sr,this.up):Wn.lookAt(Sr,Hs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),Wo.child=t,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}be.DEFAULT_UP=new R(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new R,Xn=new R,Xo=new R,$n=new R,ts=new R,es=new R,Ec=new R,$o=new R,Yo=new R,qo=new R,Zo=new Se,jo=new Se,Ko=new Se;class gn{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Xn.subVectors(i,e),Xo.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Xn),l=Mn.dot(Xo),c=Xn.dot(Xn),h=Xn.dot(Xo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Zo.setScalar(0),jo.setScalar(0),Ko.setScalar(0),Zo.fromBufferAttribute(t,e),jo.fromBufferAttribute(t,i),Ko.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zo,r.x),o.addScaledVector(jo,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Xn.subVectors(t,e),Mn.cross(Xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Mn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,i),es.subVectors(r,i),$o.subVectors(t,i);const l=ts.dot($o),c=es.dot($o);if(l<=0&&c<=0)return e.copy(i);Yo.subVectors(t,s);const h=ts.dot(Yo),u=es.dot(Yo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ts,o);qo.subVectors(t,r);const f=ts.dot(qo),g=es.dot(qo);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(es,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ec.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Ec,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},br={h:0,s:0,l:0};function Jo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=$f(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Jo(o,r,t+1/3),this.g=Jo(o,r,t),this.b=Jo(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const i=cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return te.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ne(Ge.r*255,0,255))*65536+Math.round(Ne(Ge.g*255,0,255))*256+Math.round(Ne(Ge.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=hn){te.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,s=Ge.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(br);const i=No(ci.h,br.h,e),s=No(ci.s,br.s,e),r=No(ci.l,br.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new qt;qt.NAMES=cu;let hp=0;class Ls extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Rs(),this.name="",this.blending=ms,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=wa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yo extends Ls{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new R,Er=new rt;class Nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Os(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}}class hu extends Nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class uu extends Nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ce extends Nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let up=0;const pn=new ue,Qo=new be,ns=new R,cn=new Ps,Vs=new Ps,De=new R;class Oe extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?uu:hu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(cn.min,Vs.min),cn.expandByPoint(De),De.addVectors(cn.max,Vs.max),cn.expandByPoint(De)):(cn.expandByPoint(Vs.min),cn.expandByPoint(Vs.max))}cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(t,c),De.add(ns)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new R,l[P]=new R;const c=new R,h=new R,u=new R,d=new rt,f=new rt,g=new rt,_=new R,m=new R;function p(P,E,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[E].add(_),a[y].add(_),l[P].add(m),l[E].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const y=S[P],L=y.start,F=y.count;for(let z=L,O=L+F;z<O;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new R,x=new R,D=new R,T=new R;function A(P){D.fromBufferAttribute(s,P),T.copy(D);const E=a[P];v.copy(E),v.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(T,E);const L=x.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,E=S.length;P<E;++P){const y=S[P],L=y.start,F=y.count;for(let z=L,O=L+F;z<O;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new ue,Ti=new vo,wr=new xo,Tc=new R,Tr=new R,Ar=new R,Cr=new R,ta=new R,Rr=new R,Ac=new R,Pr=new R;class ft extends be{constructor(t=new Oe,e=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ta.fromBufferAttribute(u,t),o?Rr.addScaledVector(ta,h):Rr.addScaledVector(ta.sub(e),h))}e.add(Rr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(wr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(wr,Tc)===null||Ti.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(wc),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,D=v;x<D;x+=3){const T=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);s=Lr(this,p,t,i,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=Lr(this,o,t,i,c,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,D=v;x<D;x+=3){const T=x,A=x+1,P=x+2;s=Lr(this,p,t,i,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,x=m+2;s=Lr(this,o,t,i,c,h,u,S,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function dp(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pr);return c<e.near||c>e.far?null:{distance:c,point:Pr.clone(),object:n}}function Lr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Tr),n.getVertexPosition(l,Ar),n.getVertexPosition(c,Cr);const h=dp(n,t,e,i,Tr,Ar,Cr,Ac);if(h){const u=new R;gn.getBarycoord(Ac,Tr,Ar,Cr,u),s&&(h.uv=gn.getInterpolatedAttribute(s,a,l,c,u,new rt)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};gn.getNormal(Tr,Ar,Cr,d.normal),h.face=d,h.barycoord=u}return h}class Me extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(_,m,p,S,v,x,D,T,A,P,E){const y=x/A,L=D/P,F=x/2,z=D/2,O=T/2,G=A+1,W=P+1;let Z=0,V=0;const J=new R;for(let et=0;et<W;et++){const st=et*L-z;for(let Pt=0;Pt<G;Pt++){const Zt=Pt*y-F;J[_]=Zt*S,J[m]=st*v,J[p]=O,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(Pt/A),u.push(1-et/P),Z+=1}}for(let et=0;et<P;et++)for(let st=0;st<A;st++){const Pt=d+st+G*et,Zt=d+st+G*(et+1),$=d+(st+1)+G*(et+1),nt=d+(st+1)+G*et;l.push(Pt,Zt,nt),l.push(Zt,$,nt),V+=6}a.addGroup(f,V,E),f+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=ws(n[e]);for(const s in i)t[s]=i[s]}return t}function fp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function du(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const pp={clone:ws,merge:Ye};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Ls{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fu extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new R,Cc=new rt,Rc=new rt;class mn extends fu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Rc),e.subVectors(Rc,Cc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class _p extends be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new mn(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new mn(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new mn(is,ss,t,e);a.layers=this.layers,this.add(a);const l=new mn(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new mn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pu extends en{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xp extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Me(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:mi});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Un),new _p(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ea=new R,vp=new R,yp=new Xt;class di{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ea.subVectors(i,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ea),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yp.getNormalMatrix(t),s=this.coplanarPoint(ea).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new xo,Dr=new R;class Ll{constructor(t=new di,e=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],v=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+o,d+h,m+g,x+S).normalize(),i[3].setComponents(l-o,d-h,m-g,x-S).normalize(),i[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===Jn)i[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===so)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Mp(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class cr extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const v=S+c*p,x=S+c*(p+1),D=S+1+c*(p+1),T=S+1+c*p;f.push(v,x,T),f.push(x,D,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,km=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,og=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Sp,alphahash_pars_fragment:bp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Cp,aomap_pars_fragment:Rp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:zp,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Bp,clipping_planes_vertex:kp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Yp,displacementmap_pars_vertex:qp,displacementmap_vertex:Zp,emissivemap_fragment:jp,emissivemap_pars_fragment:Kp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:vm,lights_physical_pars_fragment:ym,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:bm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:wm,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Cm,map_pars_fragment:Rm,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:zm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:Bm,normal_fragment_maps:km,normal_pars_fragment:Hm,normal_pars_vertex:Vm,normal_vertex:Gm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:qm,opaque_fragment:Zm,packing:jm,premultiplied_alpha_fragment:Km,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:xg,uv_vertex:vg,worldpos_vertex:yg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:bg,backgroundCube_frag:Eg,cube_vert:wg,cube_frag:Tg,depth_vert:Ag,depth_frag:Cg,distanceRGBA_vert:Rg,distanceRGBA_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ig,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:zg,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:Bg,meshmatcap_frag:kg,meshnormal_vert:Hg,meshnormal_frag:Vg,meshphong_vert:Gg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:$g,meshtoon_vert:Yg,meshtoon_frag:qg,points_vert:Zg,points_frag:jg,shadow_vert:Kg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:t0},ht={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ln={basic:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ye([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ye([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ye([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ye([ht.points,ht.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ye([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ye([ht.common,ht.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ye([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ye([ht.sprite,ht.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ye([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ye([ht.lights,ht.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Ln.physical={uniforms:Ye([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Ir={r:0,b:0,g:0},Ci=new Tn,e0=new ue;function n0(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const x=g(S);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===go)?(h===void 0&&(h=new ft(new Me(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ws(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(Ci)),h.material.toneMapped=te.getTransfer(x.colorSpace)!==ae,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ft(new cr(2,2),new vi({name:"BackgroundMaterial",uniforms:ws(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Ir,du(n)),i.buffers.color.setClear(Ir.r,Ir.g,Ir.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function i0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,L,F,z,O){let G=!1;const W=u(z,F,L);r!==W&&(r=W,c(r.object)),G=f(y,z,F,O),G&&g(y,z,F,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(y,L,F,z),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,L,F){const z=F.wireframe===!0;let O=i[y.id];O===void 0&&(O={},i[y.id]=O);let G=O[L.id];G===void 0&&(G={},O[L.id]=G);let W=G[z];return W===void 0&&(W=d(l()),G[z]=W),W}function d(y){const L=[],F=[],z=[];for(let O=0;O<e;O++)L[O]=0,F[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,L,F,z){const O=r.attributes,G=L.attributes;let W=0;const Z=F.getAttributes();for(const V in Z)if(Z[V].location>=0){const et=O[V];let st=G[V];if(st===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function g(y,L,F,z){const O={},G=L.attributes;let W=0;const Z=F.getAttributes();for(const V in Z)if(Z[V].location>=0){let et=G[V];et===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(et=y.instanceColor));const st={};st.attribute=et,et&&et.data&&(st.data=et.data),O[V]=st,W++}r.attributes=O,r.attributesNum=W,r.index=z}function _(){const y=r.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const F=r.newAttributes,z=r.enabledAttributes,O=r.attributeDivisors;F[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),O[y]!==L&&(n.vertexAttribDivisor(y,L),O[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let F=0,z=L.length;F<z;F++)L[F]!==y[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function v(y,L,F,z,O,G,W){W===!0?n.vertexAttribIPointer(y,L,F,O,G):n.vertexAttribPointer(y,L,F,z,O,G)}function x(y,L,F,z){_();const O=z.attributes,G=F.getAttributes(),W=L.defaultAttributeValues;for(const Z in G){const V=G[Z];if(V.location>=0){let J=O[Z];if(J===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const et=J.normalized,st=J.itemSize,Pt=t.get(J);if(Pt===void 0)continue;const Zt=Pt.buffer,$=Pt.type,nt=Pt.bytesPerElement,St=$===n.INT||$===n.UNSIGNED_INT||J.gpuType===El;if(J.isInterleavedBufferAttribute){const lt=J.data,Lt=lt.stride,Bt=J.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft,lt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Ft=0;Ft<V.locationSize;Ft++)v(V.location+Ft,st/V.locationSize,$,et,Lt*nt,(Bt+st/V.locationSize*Ft)*nt,St)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)p(V.location+lt,J.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let lt=0;lt<V.locationSize;lt++)v(V.location+lt,st/V.locationSize,$,et,st*nt,st/V.locationSize*lt*nt,St)}}else if(W!==void 0){const et=W[Z];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(V.location,et);break;case 3:n.vertexAttrib3fv(V.location,et);break;case 4:n.vertexAttrib4fv(V.location,et);break;default:n.vertexAttrib1fv(V.location,et)}}}}S()}function D(){P();for(const y in i){const L=i[y];for(const F in L){const z=L[F];for(const O in z)h(z[O].object),delete z[O];delete L[F]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const F in L){const z=L[F];for(const O in z)h(z[O].object),delete z[O];delete L[F]}delete i[y.id]}function A(y){for(const L in i){const F=i[L];if(F[y.id]===void 0)continue;const z=F[y.id];for(const O in z)h(z[O].object),delete z[O];delete F[y.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function s0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Kn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:D,maxSamples:T}}function o0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new di,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,v=S*4;let x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let D=0;D!==v;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function a0(n){let t=new WeakMap;function e(o,a){return a===Ia?o.mapping=Ms:a===Ua&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ia||a===Ua)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class gu extends fu{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const us=4,Pc=[.125,.215,.35,.446,.526,.582],Ui=20,na=new gu,Lc=new qt;let ia=null,sa=0,ra=0,oa=!1;const Li=(1+Math.sqrt(5))/2,rs=1/Li,Dc=[new R(-Li,rs,0),new R(Li,rs,0),new R(-rs,0,Li),new R(rs,0,Li),new R(0,Li,-rs),new R(0,Li,rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=oa,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:lr,format:En,colorSpace:Cs,depthBuffer:!1},s=Uc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(r)),this._blurMaterial=c0(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,i,s){const a=new mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Lc),h.toneMapping=gi,h.autoClear=!1;const f=new yo({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ft(new Me,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Lc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ur(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ms||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,na)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(s-r-1)%Dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const p=[];let S=0;for(let A=0;A<Ui;++A){const P=A/_,E=Math.exp(-P*P/2);p.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const x=this._sizeLods[s],D=3*x*(s>v-us?s-v+us:0),T=4*(this._cubeSize-x);Ur(e,D,T,3*x,2*x),l.setRenderTarget(e),l.render(u,na)}}function l0(n){const t=[],e=[],i=[];let s=n;const r=n-us+1+Pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-us?l=Pc[o-n+us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(E,_*g*T),v.set(d,m*g*T);const y=[T,T,T,T,T,T];x.set(y,p*g*T)}const D=new Oe;D.setAttribute("position",new Nn(S,_)),D.setAttribute("uv",new Nn(v,m)),D.setAttribute("faceIndex",new Nn(x,p)),t.push(D),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uc(n,t,e){const i=new Hi(n,t,e);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ur(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function c0(n,t,e){const i=new Float32Array(Ui),s=new R(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Nc(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function zc(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ia||l===Ua,h=l===Ms||l===Ss;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ic(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ic(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function u0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function d0(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,x=S.length;v<x;v+=3){const D=S[v+0],T=S[v+1],A=S[v+2];d.push(D,T,T,A,A,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){const D=v+0,T=v+1,A=v+2;d.push(D,T,T,A,A,D)}}else return;const m=new(ou(d)?uu:hu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function f0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function m0(n,t,e){const i=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const A=new Float32Array(D*T*4*u),P=new lu(A,D,T,u);P.type=Kn,P.needsUpdate=!0;const E=x*4;for(let L=0;L<u;L++){const F=p[L],z=S[L],O=v[L],G=D*T*4*L;for(let W=0;W<F.count;W++){const Z=W*E;g===!0&&(s.fromBufferAttribute(F,W),A[G+Z+0]=s.x,A[G+Z+1]=s.y,A[G+Z+2]=s.z,A[G+Z+3]=0),_===!0&&(s.fromBufferAttribute(z,W),A[G+Z+4]=s.x,A[G+Z+5]=s.y,A[G+Z+6]=s.z,A[G+Z+7]=0),m===!0&&(s.fromBufferAttribute(O,W),A[G+Z+8]=s.x,A[G+Z+9]=s.y,A[G+Z+10]=s.z,A[G+Z+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new rt(D,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function g0(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class _u extends en{constructor(t,e,i,s,r,o,a,l,c,h=gs){if(h!==gs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gs&&(i=ki),i===void 0&&h===Es&&(i=bs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const xu=new en,Fc=new _u(1,1),vu=new lu,yu=new np,Mu=new pu,Oc=[],Bc=[],kc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function Ds(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mo(n,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function v0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function M0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Vc.set(i),n.uniformMatrix2fv(this.addr,!1,Vc),Pe(e,i)}}function S0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Hc.set(i),n.uniformMatrix3fv(this.addr,!1,Hc),Pe(e,i)}}function b0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;kc.set(i),n.uniformMatrix4fv(this.addr,!1,kc),Pe(e,i)}}function E0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function w0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function A0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function C0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function R0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function L0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function D0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fc.compareFunction=ru,r=Fc):r=xu,e.setTexture2D(t||r,s)}function I0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||yu,s)}function U0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Mu,s)}function N0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vu,s)}function z0(n){switch(n){case 5126:return _0;case 35664:return x0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return E0;case 35667:case 35671:return w0;case 35668:case 35672:return T0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function F0(n,t){n.uniform1fv(this.addr,t)}function O0(n,t){const e=Ds(t,this.size,2);n.uniform2fv(this.addr,e)}function B0(n,t){const e=Ds(t,this.size,3);n.uniform3fv(this.addr,e)}function k0(n,t){const e=Ds(t,this.size,4);n.uniform4fv(this.addr,e)}function H0(n,t){const e=Ds(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function V0(n,t){const e=Ds(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function G0(n,t){const e=Ds(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function W0(n,t){n.uniform1iv(this.addr,t)}function X0(n,t){n.uniform2iv(this.addr,t)}function $0(n,t){n.uniform3iv(this.addr,t)}function Y0(n,t){n.uniform4iv(this.addr,t)}function q0(n,t){n.uniform1uiv(this.addr,t)}function Z0(n,t){n.uniform2uiv(this.addr,t)}function j0(n,t){n.uniform3uiv(this.addr,t)}function K0(n,t){n.uniform4uiv(this.addr,t)}function J0(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xu,r[o])}function Q0(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yu,r[o])}function t_(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mu,r[o])}function e_(n,t,e){const i=this.cache,s=t.length,r=Mo(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vu,r[o])}function n_(n){switch(n){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return $0;case 35669:case 35673:return Y0;case 5125:return q0;case 36294:return Z0;case 36295:return j0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}class i_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=z0(e.type)}}class s_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}}class r_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Gc(n,t){n.seq.push(t),n.map[t.id]=t}function o_(n,t,e){const i=n.name,s=i.length;for(aa.lastIndex=0;;){const r=aa.exec(i),o=aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gc(e,c===void 0?new i_(a,n,t):new s_(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new r_(a),Gc(e,u)),e=u}}}class to{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);o_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Wc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const a_=37297;let l_=0;function c_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Xc=new Xt;function h_(n){te._getMatrix(Xc,te.workingColorSpace,n);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case _o:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $c(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+c_(n.getShaderSource(t),o)}else return s}function u_(n,t){const e=h_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d_(n,t){let e;switch(t){case Cf:e="Linear";break;case Rf:e="Reinhard";break;case Pf:e="Cineon";break;case Lf:e="ACESFilmic";break;case If:e="AgX";break;case Uf:e="Neutral";break;case Df:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new R;function f_(){te.getLuminanceCoefficients(Nr);const n=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function m_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function g_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ys(n){return n!==""}function Yc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(__,v_)}const x_=new Map;function v_(n,t){let e=Yt[t];if(e===void 0){const i=x_.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(y_,M_)}function M_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===af?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function b_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ms:case Ss:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function w_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case Tf:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function T_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function A_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=S_(e),c=b_(e),h=E_(e),u=w_(e),d=T_(e),f=p_(e),g=m_(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==gi?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),o=hl(o),o=Yc(o,e),o=qc(o,e),a=hl(a),a=Yc(a,e),a=qc(a,e),o=Zc(o),a=Zc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+o,x=S+p+a,D=Wc(s,s.VERTEX_SHADER,v),T=Wc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(D).trim(),O=s.getShaderInfoLog(T).trim();let G=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,T);else{const Z=$c(s,D,"vertex"),V=$c(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Z+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||O==="")&&(W=!1);W&&(L.diagnostics={runnable:G,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(D),s.deleteShader(T),P=new to(s,_),E=g_(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,a_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let C_=0;class R_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new P_(t),e.set(t,i)),i}}class P_{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}}function L_(n,t,e,i,s,r,o){const a=new Pl,l=new R_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,L,F,z){const O=F.fog,G=z.geometry,W=E.isMeshStandardMaterial?F.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),V=Z&&Z.mapping===go?Z.image.height:null,J=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=et!==void 0?et.length:0;let Pt=0;G.morphAttributes.position!==void 0&&(Pt=1),G.morphAttributes.normal!==void 0&&(Pt=2),G.morphAttributes.color!==void 0&&(Pt=3);let Zt,$,nt,St;if(J){const oe=Ln[J];Zt=oe.vertexShader,$=oe.fragmentShader}else Zt=E.vertexShader,$=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),St=l.getFragmentShaderID(E);const lt=n.getRenderTarget(),Lt=n.state.buffers.depth.getReversed(),Bt=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,Qt=!!E.map,K=!!E.matcap,ot=!!Z,C=!!E.aoMap,At=!!E.lightMap,tt=!!E.bumpMap,vt=!!E.normalMap,ct=!!E.displacementMap,Ut=!!E.emissiveMap,_t=!!E.metalnessMap,w=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,Y=E.dispersion>0,Q=E.iridescence>0,q=E.sheen>0,bt=E.transmission>0,ut=M&&!!E.anisotropyMap,xt=B&&!!E.clearcoatMap,jt=B&&!!E.clearcoatNormalMap,it=B&&!!E.clearcoatRoughnessMap,yt=Q&&!!E.iridescenceMap,Nt=Q&&!!E.iridescenceThicknessMap,Ot=q&&!!E.sheenColorMap,Mt=q&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,$t=!!E.specularColorMap,de=!!E.specularIntensityMap,I=bt&&!!E.transmissionMap,dt=bt&&!!E.thicknessMap,X=!!E.gradientMap,j=!!E.alphaMap,gt=E.alphaTest>0,pt=!!E.alphaHash,Gt=!!E.extensions;let ye=gi;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ye=n.toneMapping);const He={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Zt,fragmentShader:$,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&z.instanceColor!==null,instancingMorph:Bt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Cs,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:K,envMap:ot,envMapMode:ot&&Z.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:At,bumpMap:tt,normalMap:vt,displacementMap:d&&ct,emissiveMap:Ut,normalMapObjectSpace:vt&&E.normalMapType===Of,normalMapTangentSpace:vt&&E.normalMapType===su,metalnessMap:_t,roughnessMap:w,anisotropy:M,anisotropyMap:ut,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:Y,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:Nt,sheen:q,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:Jt,specularColorMap:$t,specularIntensityMap:de,transmission:bt,transmissionMap:I,thicknessMap:dt,gradientMap:X,opaque:E.transparent===!1&&E.blending===ms&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:gt,alphaHash:pt,combine:E.combine,mapUv:Qt&&_(E.map.channel),aoMapUv:C&&_(E.aoMap.channel),lightMapUv:At&&_(E.lightMap.channel),bumpMapUv:tt&&_(E.bumpMap.channel),normalMapUv:vt&&_(E.normalMap.channel),displacementMapUv:ct&&_(E.displacementMap.channel),emissiveMapUv:Ut&&_(E.emissiveMap.channel),metalnessMapUv:_t&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:ut&&_(E.anisotropyMap.channel),clearcoatMapUv:xt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(E.sheenRoughnessMap.channel),specularMapUv:Jt&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:de&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:j&&_(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(vt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Qt||j),fog:!!O,useFog:E.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Pt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===ae,decodeVideoTextureEmissive:Ut&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===In,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&E.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(S(y,E),v(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const y=g[E.type];let L;if(y){const F=Ln[y];L=pp.clone(F.uniforms)}else L=E.uniforms;return L}function D(E,y){let L;for(let F=0,z=h.length;F<z;F++){const O=h[F];if(O.cacheKey===y){L=O,++L.usedTimes;break}}return L===void 0&&(L=new A_(n,y,E,r),h.push(L)),L}function T(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function D_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function I_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Kc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||I_),i.length>1&&i.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function U_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Jc,n.set(i,[o])):s>=r.length?(o=new Jc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function N_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new qt};break;case"SpotLight":e={position:new R,direction:new R,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function z_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let F_=0;function O_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function B_(n){const t=new N_,e=z_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,r=new ue,o=new ue;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,v=0,x=0,D=0,T=0,A=0;c.sort(O_);for(let E=0,y=c.length;E<y;E++){const L=c[E],F=L.color,z=L.intensity,O=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*z,u+=F.g*z,d+=F.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],z);A++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=L.shadow.matrix,S++}i.directional[f]=W,f++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(z),W.distance=O,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;const Z=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,Z.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=Z.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=G,x++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(F).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Z=L.shadow,V=e.get(L);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==D||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+D-T,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=D,P.numLightProbes=A,i.version=F_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Qc(n){const t=new B_(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function k_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Qc(n),t.set(s,[a])):r>=o.length?(a=new Qc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class H_ extends Ls{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V_ extends Ls{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X_(n,t,e){let i=new Ll;const s=new rt,r=new rt,o=new Se,a=new H_({depthPacking:Ff}),l=new V_,c={},h=e.maxTextureSize,u={[xi]:tn,[tn]:xi,[In]:In},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:G_,fragmentShader:W_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(mi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==qn&&this.type===qn,O=p===qn&&this.type!==qn;for(let G=0,W=T.length;G<W;G++){const Z=T[G],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const J=V.getFrameExtents();if(s.multiply(J),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,V.mapSize.y=r.y)),V.map===null||z===!0||O===!0){const st=this.type!==qn?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new Hi(s.x,s.y,st),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const et=V.getViewportCount();for(let st=0;st<et;st++){const Pt=V.getViewport(st);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),F.viewport(o),V.updateMatrices(Z,st),i=V.getFrustum(),x(A,P,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===qn&&S(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,L)};function S(T,A){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,P,f,_,null)}function v(T,A,P,E){let y=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=y.uuid,z=A.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let G=O[z];G===void 0&&(G=y.clone(),O[z]=G,A.addEventListener("dispose",D)),y=G}if(y.visible=A.visible,y.wireframe=A.wireframe,E===qn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=P}return y}function x(T,A,P,E,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===qn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=t.update(T),O=T.material;if(Array.isArray(O)){const G=z.groups;for(let W=0,Z=G.length;W<Z;W++){const V=G[W],J=O[V.materialIndex];if(J&&J.visible){const et=v(T,J,E,y);T.onBeforeShadow(n,T,A,P,z,et,V),n.renderBufferDirect(P,null,z,et,T,V),T.onAfterShadow(n,T,A,P,z,et,V)}}}else if(O.visible){const G=v(T,O,E,y);T.onBeforeShadow(n,T,A,P,z,G,null),n.renderBufferDirect(P,null,z,G,T,null),T.onAfterShadow(n,T,A,P,z,G,null)}}const F=T.children;for(let z=0,O=F.length;z<O;z++)x(F[z],A,P,E,y)}function D(T){T.target.removeEventListener("dispose",D);for(const P in c){const E=c[P],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const $_={[Ta]:Aa,[Ca]:La,[Ra]:Da,[ys]:Pa,[Aa]:Ta,[La]:Ca,[Da]:Ra,[Pa]:ys};function Y_(n,t){function e(){let I=!1;const dt=new Se;let X=null;const j=new Se(0,0,0,0);return{setMask:function(gt){X!==gt&&!I&&(n.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){I=gt},setClear:function(gt,pt,Gt,ye,He){He===!0&&(gt*=ye,pt*=ye,Gt*=ye),dt.set(gt,pt,Gt,ye),j.equals(dt)===!1&&(n.clearColor(gt,pt,Gt,ye),j.copy(dt))},reset:function(){I=!1,X=null,j.set(-1,0,0,0)}}}function i(){let I=!1,dt=!1,X=null,j=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const ye=gt;gt=null,this.setClear(ye)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?lt(n.DEPTH_TEST):Lt(n.DEPTH_TEST)},setMask:function(pt){X!==pt&&!I&&(n.depthMask(pt),X=pt)},setFunc:function(pt){if(dt&&(pt=$_[pt]),j!==pt){switch(pt){case Ta:n.depthFunc(n.NEVER);break;case Aa:n.depthFunc(n.ALWAYS);break;case Ca:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case Ra:n.depthFunc(n.EQUAL);break;case Pa:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=pt}},setLocked:function(pt){I=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){I=!1,X=null,j=null,gt=null,dt=!1}}}function s(){let I=!1,dt=null,X=null,j=null,gt=null,pt=null,Gt=null,ye=null,He=null;return{setTest:function(oe){I||(oe?lt(n.STENCIL_TEST):Lt(n.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!I&&(n.stencilMask(oe),dt=oe)},setFunc:function(oe,_n,On){(X!==oe||j!==_n||gt!==On)&&(n.stencilFunc(oe,_n,On),X=oe,j=_n,gt=On)},setOp:function(oe,_n,On){(pt!==oe||Gt!==_n||ye!==On)&&(n.stencilOp(oe,_n,On),pt=oe,Gt=_n,ye=On)},setLocked:function(oe){I=oe},setClear:function(oe){He!==oe&&(n.clearStencil(oe),He=oe)},reset:function(){I=!1,dt=null,X=null,j=null,gt=null,pt=null,Gt=null,ye=null,He=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,D=null,T=null,A=new qt(0,0,0),P=0,E=!1,y=null,L=null,F=null,z=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Z>=2);let J=null,et={};const st=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Zt=new Se().fromArray(st),$=new Se().fromArray(Pt);function nt(I,dt,X,j){const gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(I,pt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<X;Gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(dt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}const St={};St[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(ys),tt(!1),vt(ic),lt(n.CULL_FACE),C(mi);function lt(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Lt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Bt(I,dt){return u[I]!==dt?(n.bindFramebuffer(I,dt),u[I]=dt,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ft(I,dt){let X=f,j=!1;if(I){X=d.get(dt),X===void 0&&(X=[],d.set(dt,X));const gt=I.textures;if(X.length!==gt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Gt=gt.length;pt<Gt;pt++)X[pt]=n.COLOR_ATTACHMENT0+pt;X.length=gt.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function Qt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const K={[Ii]:n.FUNC_ADD,[cf]:n.FUNC_SUBTRACT,[hf]:n.FUNC_REVERSE_SUBTRACT};K[uf]=n.MIN,K[df]=n.MAX;const ot={[ff]:n.ZERO,[pf]:n.ONE,[mf]:n.SRC_COLOR,[Ea]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[vf]:n.DST_COLOR,[_f]:n.DST_ALPHA,[gf]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[yf]:n.ONE_MINUS_DST_COLOR,[xf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[bf]:n.ONE_MINUS_CONSTANT_COLOR,[Ef]:n.CONSTANT_ALPHA,[wf]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,dt,X,j,gt,pt,Gt,ye,He,oe){if(I===mi){_===!0&&(Lt(n.BLEND),_=!1);return}if(_===!1&&(lt(n.BLEND),_=!0),I!==lf){if(I!==m||oe!==E){if((p!==Ii||x!==Ii)&&(n.blendEquation(n.FUNC_ADD),p=Ii,x=Ii),oe)switch(I){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,v=null,D=null,T=null,A.set(0,0,0),P=0,m=I,E=oe}return}gt=gt||dt,pt=pt||X,Gt=Gt||j,(dt!==p||gt!==x)&&(n.blendEquationSeparate(K[dt],K[gt]),p=dt,x=gt),(X!==S||j!==v||pt!==D||Gt!==T)&&(n.blendFuncSeparate(ot[X],ot[j],ot[pt],ot[Gt]),S=X,v=j,D=pt,T=Gt),(ye.equals(A)===!1||He!==P)&&(n.blendColor(ye.r,ye.g,ye.b,He),A.copy(ye),P=He),m=I,E=!1}function At(I,dt){I.side===In?Lt(n.CULL_FACE):lt(n.CULL_FACE);let X=I.side===tn;dt&&(X=!X),tt(X),I.blending===ms&&I.transparent===!1?C(mi):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function tt(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function vt(I){I!==rf?(lt(n.CULL_FACE),I!==L&&(I===ic?n.cullFace(n.BACK):I===of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Lt(n.CULL_FACE),L=I}function ct(I){I!==F&&(W&&n.lineWidth(I),F=I)}function Ut(I,dt,X){I?(lt(n.POLYGON_OFFSET_FILL),(z!==dt||O!==X)&&(n.polygonOffset(dt,X),z=dt,O=X)):Lt(n.POLYGON_OFFSET_FILL)}function _t(I){I?lt(n.SCISSOR_TEST):Lt(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+G-1),J!==I&&(n.activeTexture(I),J=I)}function M(I,dt,X){X===void 0&&(J===null?X=n.TEXTURE0+G-1:X=J);let j=et[X];j===void 0&&(j={type:void 0,texture:void 0},et[X]=j),(j.type!==I||j.texture!==dt)&&(J!==X&&(n.activeTexture(X),J=X),n.bindTexture(I,dt||St[I]),j.type=I,j.texture=dt)}function B(){const I=et[J];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(I){Zt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function Mt(I){$.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Jt(I,dt){let X=c.get(dt);X===void 0&&(X=new WeakMap,c.set(dt,X));let j=X.get(I);j===void 0&&(j=n.getUniformBlockIndex(dt,I.name),X.set(I,j))}function $t(I,dt){const j=c.get(dt).get(I);l.get(dt)!==j&&(n.uniformBlockBinding(dt,j,I.__bindingPointIndex),l.set(dt,j))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,et={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,D=null,T=null,A=new qt(0,0,0),P=0,E=!1,y=null,L=null,F=null,z=null,O=null,Zt.set(0,0,n.canvas.width,n.canvas.height),$.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Lt,bindFramebuffer:Bt,drawBuffers:Ft,useProgram:Qt,setBlending:C,setMaterial:At,setFlipSided:tt,setCullFace:vt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:_t,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:yt,texImage3D:Nt,updateUBOMapping:Jt,uniformBlockBinding:$t,texStorage2D:jt,texStorage3D:it,texSubImage2D:q,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:xt,scissor:Ot,viewport:Mt,reset:de}}function th(n,t,e,i){const s=q_(i);switch(e){case Kh:return n*t;case Qh:return n*t;case tu:return n*t*2;case eu:return n*t/s.components*s.byteLength;case Al:return n*t/s.components*s.byteLength;case nu:return n*t*2/s.components*s.byteLength;case Cl:return n*t*2/s.components*s.byteLength;case Jh:return n*t*3/s.components*s.byteLength;case En:return n*t*4/s.components*s.byteLength;case Rl:return n*t*4/s.components*s.byteLength;case Zr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:case ka:return Math.max(n,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(n,8)*Math.max(t,8)/2;case Ha:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qr:case sl:case rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case iu:case ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case al:case ll:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q_(n){switch(n){case ei:case qh:return{byteLength:1,components:1};case sr:case Zh:case lr:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case ki:case El:case Kn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z_(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):ro("canvas")}function _(w,M,B){let Y=1;const Q=_t(w);if((Q.width>B||Q.height>B)&&(Y=B/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(Y*Q.width),bt=Math.floor(Y*Q.height);u===void 0&&(u=g(q,bt));const ut=M?g(q,bt):u;return ut.width=q,ut.height=bt,ut.getContext("2d").drawImage(w,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+bt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(w,M,B,Y,Q=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=M;if(M===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),M===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),M===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const bt=Q?_o:te.getTransfer(Y);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=bt===ae?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(w,M){let B;return w?M===null||M===ki||M===bs?B=n.DEPTH24_STENCIL8:M===Kn?B=n.DEPTH32F_STENCIL8:M===sr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===bs?B=n.DEPTH_COMPONENT24:M===Kn?B=n.DEPTH_COMPONENT32F:M===sr&&(B=n.DEPTH_COMPONENT16),B}function D(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){const M=w.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&h.delete(M)}function A(w){const M=w.target;M.removeEventListener("dispose",A),y(M)}function P(w){const M=i.get(w);if(M.__webglInit===void 0)return;const B=w.source,Y=d.get(B);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(Y).length===0&&d.delete(B)}i.remove(w)}function E(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const B=w.source,Y=d.get(B);delete Y[M.__cacheKey],o.memory.textures--}function y(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=w.textures;for(let Y=0,Q=B.length;Y<Q;Y++){const q=i.get(B[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(w)}let L=0;function F(){L=0}function z(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function O(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function G(w,M){const B=i.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,w,M);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function W(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function Z(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function V(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){nt(B,w,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const J={[Na]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[za]:n.MIRRORED_REPEAT},et={[wn]:n.NEAREST,[Nf]:n.NEAREST_MIPMAP_NEAREST,[mr]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Uo]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},st={[Bf]:n.NEVER,[Xf]:n.ALWAYS,[kf]:n.LESS,[ru]:n.LEQUAL,[Hf]:n.EQUAL,[Wf]:n.GEQUAL,[Vf]:n.GREATER,[Gf]:n.NOTEQUAL};function Pt(w,M){if(M.type===Kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===Uo||M.magFilter===mr||M.magFilter===Fi||M.minFilter===Un||M.minFilter===Uo||M.minFilter===mr||M.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,J[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,J[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,J[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,et[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,st[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==mr&&M.minFilter!==Fi||M.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));const Y=M.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=O(M);if(q!==w.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[q].usedTimes++;const bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&E(M)),w.__cacheKey=q,w.__webglTexture=Q[q].texture}return B}function $(w,M,B){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Zt(w,M),q=M.source;e.bindTexture(Y,w.__webglTexture,n.TEXTURE0+B);const bt=i.get(q);if(q.version!==bt.__version||Q===!0){e.activeTexture(n.TEXTURE0+B);const ut=te.getPrimaries(te.workingColorSpace),xt=M.colorSpace===fi?null:te.getPrimaries(M.colorSpace),jt=M.colorSpace===fi||ut===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(M.image,!1,s.maxTextureSize);it=Ut(M,it);const yt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let Ot=v(M.internalFormat,yt,Nt,M.colorSpace,M.isVideoTexture);Pt(Y,M);let Mt;const Jt=M.mipmaps,$t=M.isVideoTexture!==!0,de=bt.__version===void 0||Q===!0,I=q.dataReady,dt=D(M,it);if(M.isDepthTexture)Ot=x(M.format===Es,M.type),de&&($t?e.texStorage2D(n.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Ot,it.width,it.height,0,yt,Nt,null));else if(M.isDataTexture)if(Jt.length>0){$t&&de&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,Jt[0].width,Jt[0].height);for(let X=0,j=Jt.length;X<j;X++)Mt=Jt[X],$t?I&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Mt.width,Mt.height,yt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,X,Ot,Mt.width,Mt.height,0,yt,Nt,Mt.data);M.generateMipmaps=!1}else $t?(de&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,it.width,it.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,yt,Nt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,it.width,it.height,0,yt,Nt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ot,Jt[0].width,Jt[0].height,it.depth);for(let X=0,j=Jt.length;X<j;X++)if(Mt=Jt[X],M.format!==En)if(yt!==null)if($t){if(I)if(M.layerUpdates.size>0){const gt=th(Mt.width,Mt.height,M.format,M.type);for(const pt of M.layerUpdates){const Gt=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,pt,Mt.width,Mt.height,1,yt,Gt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,it.depth,yt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ot,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,it.depth,yt,Nt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Ot,Mt.width,Mt.height,it.depth,0,yt,Nt,Mt.data)}else{$t&&de&&e.texStorage2D(n.TEXTURE_2D,dt,Ot,Jt[0].width,Jt[0].height);for(let X=0,j=Jt.length;X<j;X++)Mt=Jt[X],M.format!==En?yt!==null?$t?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?I&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,Mt.width,Mt.height,yt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,X,Ot,Mt.width,Mt.height,0,yt,Nt,Mt.data)}else if(M.isDataArrayTexture)if($t){if(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ot,it.width,it.height,it.depth),I)if(M.layerUpdates.size>0){const X=th(it.width,it.height,M.format,M.type);for(const j of M.layerUpdates){const gt=it.data.subarray(j*X/it.data.BYTES_PER_ELEMENT,(j+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,yt,Nt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Nt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,yt,Nt,it.data);else if(M.isData3DTexture)$t?(de&&e.texStorage3D(n.TEXTURE_3D,dt,Ot,it.width,it.height,it.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Nt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,yt,Nt,it.data);else if(M.isFramebufferTexture){if(de)if($t)e.texStorage2D(n.TEXTURE_2D,dt,Ot,it.width,it.height);else{let X=it.width,j=it.height;for(let gt=0;gt<dt;gt++)e.texImage2D(n.TEXTURE_2D,gt,Ot,X,j,0,yt,Nt,null),X>>=1,j>>=1}}else if(Jt.length>0){if($t&&de){const X=_t(Jt[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ot,X.width,X.height)}for(let X=0,j=Jt.length;X<j;X++)Mt=Jt[X],$t?I&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,yt,Nt,Mt):e.texImage2D(n.TEXTURE_2D,X,Ot,yt,Nt,Mt);M.generateMipmaps=!1}else if($t){if(de){const X=_t(it);e.texStorage2D(n.TEXTURE_2D,dt,Ot,X.width,X.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Nt,it)}else e.texImage2D(n.TEXTURE_2D,0,Ot,yt,Nt,it);m(M)&&p(Y),bt.__version=q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function nt(w,M,B){if(M.image.length!==6)return;const Y=Zt(w,M),Q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const q=i.get(Q);if(Q.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+B);const bt=te.getPrimaries(te.workingColorSpace),ut=M.colorSpace===fi?null:te.getPrimaries(M.colorSpace),xt=M.colorSpace===fi||bt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const jt=M.isCompressedTexture||M.image[0].isCompressedTexture,it=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let j=0;j<6;j++)!jt&&!it?yt[j]=_(M.image[j],!0,s.maxCubemapSize):yt[j]=it?M.image[j].image:M.image[j],yt[j]=Ut(M,yt[j]);const Nt=yt[0],Ot=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Jt=v(M.internalFormat,Ot,Mt,M.colorSpace),$t=M.isVideoTexture!==!0,de=q.__version===void 0||Y===!0,I=Q.dataReady;let dt=D(M,Nt);Pt(n.TEXTURE_CUBE_MAP,M);let X;if(jt){$t&&de&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,Nt.width,Nt.height);for(let j=0;j<6;j++){X=yt[j].mipmaps;for(let gt=0;gt<X.length;gt++){const pt=X[gt];M.format!==En?Ot!==null?$t?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Jt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,pt.width,pt.height,Ot,Mt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Jt,pt.width,pt.height,0,Ot,Mt,pt.data)}}}else{if(X=M.mipmaps,$t&&de){X.length>0&&dt++;const j=_t(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Jt,j.width,j.height)}for(let j=0;j<6;j++)if(it){$t?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt[j].width,yt[j].height,Ot,Mt,yt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,yt[j].width,yt[j].height,0,Ot,Mt,yt[j].data);for(let gt=0;gt<X.length;gt++){const Gt=X[gt].image[j].image;$t?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Gt.width,Gt.height,Ot,Mt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Jt,Gt.width,Gt.height,0,Ot,Mt,Gt.data)}}else{$t?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ot,Mt,yt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,Ot,Mt,yt[j]);for(let gt=0;gt<X.length;gt++){const pt=X[gt];$t?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Ot,Mt,pt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Jt,Ot,Mt,pt.image[j])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function St(w,M,B,Y,Q,q){const bt=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),xt=v(B.internalFormat,bt,ut,B.colorSpace),jt=i.get(M),it=i.get(B);if(it.__renderTarget=M,!jt.__hasExternalTextures){const yt=Math.max(1,M.width>>q),Nt=Math.max(1,M.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,xt,yt,Nt,M.depth,0,bt,ut,null):e.texImage2D(Q,q,xt,yt,Nt,0,bt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),vt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,it.__webglTexture,0,tt(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,it.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(w,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(M.stencilBuffer,Q),bt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=tt(M);vt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,q,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,w)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],bt=r.convert(q.format,q.colorSpace),ut=r.convert(q.type),xt=v(q.internalFormat,bt,ut,q.colorSpace),jt=tt(M);B&&vt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,xt,M.width,M.height):vt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,xt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const Q=Y.__webglTexture,q=tt(M);if(M.depthTexture.format===gs)vt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Es)vt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Bt(w){const M=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Lt(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),lt(M.__webglDepthbuffer[Y],w,!1);else{const Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),lt(M.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(w,M,B){const Y=i.get(w);M!==void 0&&St(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Bt(w)}function Qt(w){const M=w.texture,B=i.get(w),Y=i.get(M);w.addEventListener("dispose",A);const Q=w.textures,q=w.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let xt=0;xt<M.mipmaps.length;xt++)B.__webglFramebuffer[ut][xt]=n.createFramebuffer()}else B.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)B.__webglFramebuffer[ut]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ut=0,xt=Q.length;ut<xt;ut++){const jt=i.get(Q[ut]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&vt(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const xt=Q[ut];B.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);const jt=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),yt=v(xt.internalFormat,jt,it,xt.colorSpace,w.isXRRenderTarget===!0),Nt=tt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,yt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)St(B.__webglFramebuffer[ut][xt],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else St(B.__webglFramebuffer[ut],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,xt=Q.length;ut<xt;ut++){const jt=Q[ut],it=i.get(jt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Pt(n.TEXTURE_2D,jt),St(B.__webglFramebuffer,w,jt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(jt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Y.__webglTexture),Pt(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)St(B.__webglFramebuffer[xt],w,M,n.COLOR_ATTACHMENT0,ut,xt);else St(B.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,ut,0);m(M)&&p(ut),e.unbindTexture()}w.depthBuffer&&Bt(w)}function K(w){const M=w.textures;for(let B=0,Y=M.length;B<Y;B++){const Q=M[B];if(m(Q)){const q=S(w),bt=i.get(Q).__webglTexture;e.bindTexture(q,bt),p(q),e.unbindTexture()}}}const ot=[],C=[];function At(w){if(w.samples>0){if(vt(w)===!1){const M=w.textures,B=w.width,Y=w.height;let Q=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(w),ut=M.length>1;if(ut)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);const jt=i.get(M[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,Q,n.NEAREST),l===!0&&(ot.length=0,C.length=0,ot.push(n.COLOR_ATTACHMENT0+xt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ot.push(q),C.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);const jt=i.get(M[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function tt(w){return Math.min(s.maxSamples,w.samples)}function vt(w){const M=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Ut(w,M){const B=w.colorSpace,Y=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Cs&&B!==fi&&(te.getTransfer(B)===ae?(Y!==En||Q!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=vt}function j_(n,t){function e(i,s=fi){let r;const o=te.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qh)return n.BYTE;if(i===Zh)return n.SHORT;if(i===sr)return n.UNSIGNED_SHORT;if(i===El)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===lr)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===Jh)return n.RGB;if(i===En)return n.RGBA;if(i===Qh)return n.LUMINANCE;if(i===tu)return n.LUMINANCE_ALPHA;if(i===gs)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===eu)return n.RED;if(i===Al)return n.RED_INTEGER;if(i===nu)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Zr||i===jr||i===Kr||i===Jr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fa||i===Oa||i===Ba||i===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Va||i===Ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Va)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wa||i===Xa||i===$a||i===Ya||i===qa||i===Za||i===ja||i===Ka||i===Ja||i===Qa||i===tl||i===el||i===nl||i===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===el)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qr||i===sl||i===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iu||i===ol||i===al||i===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class K_ extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oi extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new vi({vertexShader:Q_,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends Gi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new ex,m=e.getContextAttributes();let p=null,S=null;const v=[],x=[],D=new rt;let T=null;const A=new mn;A.viewport=new Se;const P=new mn;P.viewport=new Se;const E=[A,P],y=new K_;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=v[$];return nt===void 0&&(nt=new la,v[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=v[$];return nt===void 0&&(nt=new la,v[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=v[$];return nt===void 0&&(nt=new la,v[$]=nt),nt.getHandSpace()};function z($){const nt=x.indexOf($.inputSource);if(nt===-1)return;const St=v[nt];St!==void 0&&(St.update($.inputSource,$.frame,c||o),St.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let $=0;$<v.length;$++){const nt=x[$];nt!==null&&(x[$]=null,v[$].disconnect(nt))}L=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Hi(f.framebufferWidth,f.framebufferHeight,{format:En,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,St=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Es:gs,St=m.stencil?bs:ki);const Lt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Hi(d.textureWidth,d.textureHeight,{format:En,type:ei,depthTexture:new _u(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G($){for(let nt=0;nt<$.removed.length;nt++){const St=$.removed[nt],lt=x.indexOf(St);lt>=0&&(x[lt]=null,v[lt].disconnect(St))}for(let nt=0;nt<$.added.length;nt++){const St=$.added[nt];let lt=x.indexOf(St);if(lt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=x.length){x.push(St),lt=Bt;break}else if(x[Bt]===null){x[Bt]=St,lt=Bt;break}if(lt===-1)break}const Lt=v[lt];Lt&&Lt.connect(St)}}const W=new R,Z=new R;function V($,nt,St){W.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const lt=W.distanceTo(Z),Lt=nt.projectionMatrix.elements,Bt=St.projectionMatrix.elements,Ft=Lt[14]/(Lt[10]-1),Qt=Lt[14]/(Lt[10]+1),K=(Lt[9]+1)/Lt[5],ot=(Lt[9]-1)/Lt[5],C=(Lt[8]-1)/Lt[0],At=(Bt[8]+1)/Bt[0],tt=Ft*C,vt=Ft*At,ct=lt/(-C+At),Ut=ct*-C;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ut),$.translateZ(ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const _t=Ft+ct,w=Qt+ct,M=tt-Ut,B=vt+(lt-Ut),Y=K*Qt/w*_t,Q=ot*Qt/w*_t;$.projectionMatrix.makePerspective(M,B,Y,Q,_t,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function J($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let nt=$.near,St=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),y.near=P.near=A.near=nt,y.far=P.far=A.far=St,(L!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,F=y.far),A.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const lt=$.parent,Lt=y.cameras;J(y,lt);for(let Bt=0;Bt<Lt.length;Bt++)J(Lt[Bt],lt);Lt.length===2?V(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),et($,y,lt)};function et($,nt,St){St===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=cl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let st=null;function Pt($,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let lt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Bt=0;Bt<St.length;Bt++){const Ft=St[Bt];let Qt=null;if(f!==null)Qt=f.getViewport(Ft);else{const ot=u.getViewSubImage(d,Ft);Qt=ot.viewport,Bt===0&&(t.setRenderTargetTextures(S,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(S))}let K=E[Bt];K===void 0&&(K=new mn,K.layers.enable(Bt),K.viewport=new Se,E[Bt]=K),K.matrix.fromArray(Ft.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ft.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Bt===0&&(y.matrix.copy(K.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(K)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Bt=u.getDepthInformation(St[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,s.renderState)}}for(let St=0;St<v.length;St++){const lt=x[St],Lt=v[St];lt!==null&&Lt!==void 0&&Lt.update(lt,nt,c||o)}st&&st($,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Zt=new mu;Zt.setAnimationLoop(Pt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const Ri=new Tn,ix=new ue;function sx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Ri)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const x=v.program;i.uniformBlockBinding(S,x)}function c(S,v){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const D=v.program;i.updateUBOMapping(S,D);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const v=u();S.__bindingPointIndex=v;const x=n.createBuffer(),D=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,D,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=s[S.id],x=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=x.length;T<A;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,y=P.length;E<y;E++){const L=P[E];if(f(L,T,E,D)===!0){const F=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let G=0;G<z.length;G++){const W=z[G],Z=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+O,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,v,x,D){const T=S.value,A=v+"_"+x;if(D[A]===void 0)return typeof T=="number"||typeof T=="boolean"?D[A]=T:D[A]=T.clone(),!0;{const P=D[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(S){const v=S.uniforms;let x=0;const D=16;for(let A=0,P=v.length;A<P;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,L=E.length;y<L;y++){const F=E[y],z=Array.isArray(F.value)?F.value:[F.value];for(let O=0,G=z.length;O<G;O++){const W=z[O],Z=_(W),V=x%D,J=V%Z.boundary,et=V+J;x+=J,et!==0&&D-et<Z.storage&&(x+=D-et),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const T=x%D;return T>0&&(x+=D-T),S.__size=x,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ox{constructor(t={}){const{canvas:e=qf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=gi,this.toneMappingExposure=1;const x=this;let D=!1,T=0,A=0,P=null,E=-1,y=null;const L=new Se,F=new Se;let z=null;const O=new qt(0);let G=0,W=e.width,Z=e.height,V=1,J=null,et=null;const st=new Se(0,0,W,Z),Pt=new Se(0,0,W,Z);let Zt=!1;const $=new Ll;let nt=!1,St=!1;const lt=new ue,Lt=new ue,Bt=new R,Ft=new Se,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function ot(){return P===null?V:1}let C=i;function At(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),C===null){const U="webgl2";if(C=At(U,b),C===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let tt,vt,ct,Ut,_t,w,M,B,Y,Q,q,bt,ut,xt,jt,it,yt,Nt,Ot,Mt,Jt,$t,de,I;function dt(){tt=new u0(C),tt.init(),$t=new j_(C,tt),vt=new r0(C,tt,t,$t),ct=new Y_(C,tt),vt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ut=new p0(C),_t=new D_,w=new Z_(C,tt,ct,_t,vt,$t,Ut),M=new a0(x),B=new h0(x),Y=new Mp(C),de=new i0(C,Y),Q=new d0(C,Y,Ut,de),q=new g0(C,Q,Y,Ut),Ot=new m0(C,vt,w),it=new o0(_t),bt=new L_(x,M,B,tt,vt,de,it),ut=new sx(x,_t),xt=new U_,jt=new k_(tt),Nt=new n0(x,M,B,ct,q,f,l),yt=new X_(x,q,vt),I=new rx(C,Ut,vt,ct),Mt=new s0(C,tt,Ut),Jt=new f0(C,tt,Ut),Ut.programs=bt.programs,x.capabilities=vt,x.extensions=tt,x.properties=_t,x.renderLists=xt,x.shadowMap=yt,x.state=ct,x.info=Ut}dt();const X=new nx(x,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(W,Z,!1))},this.getSize=function(b){return b.set(W,Z)},this.setSize=function(b,U,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,Z=U,e.width=Math.floor(b*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(W*V,Z*V).floor()},this.setDrawingBufferSize=function(b,U,k){W=b,Z=U,V=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(st)},this.setViewport=function(b,U,k,H){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,U,k,H),ct.viewport(L.copy(st).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Pt)},this.setScissor=function(b,U,k,H){b.isVector4?Pt.set(b.x,b.y,b.z,b.w):Pt.set(b,U,k,H),ct.scissor(F.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(b){ct.setScissorTest(Zt=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(b=!0,U=!0,k=!0){let H=0;if(b){let N=!1;if(P!==null){const at=P.texture.format;N=at===Rl||at===Cl||at===Al}if(N){const at=P.texture.type,mt=at===ei||at===ki||at===sr||at===bs||at===wl||at===Tl,Et=Nt.getClearColor(),wt=Nt.getClearAlpha(),kt=Et.r,Wt=Et.g,Tt=Et.b;mt?(g[0]=kt,g[1]=Wt,g[2]=Tt,g[3]=wt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=kt,_[1]=Wt,_[2]=Tt,_[3]=wt,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}U&&(H|=C.DEPTH_BUFFER_BIT),k&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),jt.dispose(),_t.dispose(),M.dispose(),B.dispose(),q.dispose(),de.dispose(),I.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Wl),X.removeEventListener("sessionend",Xl),Si.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=Ut.autoReset,U=yt.enabled,k=yt.autoUpdate,H=yt.needsUpdate,N=yt.type;dt(),Ut.autoReset=b,yt.enabled=U,yt.autoUpdate=k,yt.needsUpdate=H,yt.type=N}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Gt(b){const U=b.target;U.removeEventListener("dispose",Gt),ye(U)}function ye(b){He(b),_t.remove(b)}function He(b){const U=_t.get(b).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,H,N,at){U===null&&(U=Qt);const mt=N.isMesh&&N.matrixWorld.determinant()<0,Et=Zu(b,U,k,H,N);ct.setMaterial(H,mt);let wt=k.index,kt=1;if(H.wireframe===!0){if(wt=Q.getWireframeAttribute(k),wt===void 0)return;kt=2}const Wt=k.drawRange,Tt=k.attributes.position;let ee=Wt.start*kt,fe=(Wt.start+Wt.count)*kt;at!==null&&(ee=Math.max(ee,at.start*kt),fe=Math.min(fe,(at.start+at.count)*kt)),wt!==null?(ee=Math.max(ee,0),fe=Math.min(fe,wt.count)):Tt!=null&&(ee=Math.max(ee,0),fe=Math.min(fe,Tt.count));const pe=fe-ee;if(pe<0||pe===1/0)return;de.setup(N,H,Et,k,wt);let Ze,ne=Mt;if(wt!==null&&(Ze=Y.get(wt),ne=Jt,ne.setIndex(Ze)),N.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*ot()),ne.setMode(C.LINES)):ne.setMode(C.TRIANGLES);else if(N.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),ct.setLineWidth(Rt*ot()),N.isLineSegments?ne.setMode(C.LINES):N.isLineLoop?ne.setMode(C.LINE_LOOP):ne.setMode(C.LINE_STRIP)}else N.isPoints?ne.setMode(C.POINTS):N.isSprite&&ne.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,Bn=N._multiDrawCounts,ie=N._multiDrawCount,xn=wt?Y.get(wt).bytesPerElement:1,Wi=_t.get(H).currentProgram.getUniforms();for(let an=0;an<ie;an++)Wi.setValue(C,"_gl_DrawID",an),ne.render(Rt[an]/xn,Bn[an])}else if(N.isInstancedMesh)ne.renderInstances(ee,pe,N.count);else if(k.isInstancedBufferGeometry){const Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Bn=Math.min(k.instanceCount,Rt);ne.renderInstances(ee,pe,Bn)}else ne.render(ee,pe)};function oe(b,U,k){b.transparent===!0&&b.side===In&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,dr(b,U,k),b.side=xi,b.needsUpdate=!0,dr(b,U,k),b.side=In):dr(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),p=jt.get(k),p.init(U),v.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let mt=0;mt<at.length;mt++){const Et=at[mt];oe(Et,k,N),H.add(Et)}else oe(at,k,N),H.add(at)}),v.pop(),p=null,H},this.compileAsync=function(b,U,k=null){const H=this.compile(b,U,k);return new Promise(N=>{function at(){if(H.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&H.delete(mt)}),H.size===0){N(b);return}setTimeout(at,10)}tt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let _n=null;function On(b){_n&&_n(b)}function Wl(){Si.stop()}function Xl(){Si.start()}const Si=new mu;Si.setAnimationLoop(On),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){_n=b,X.setAnimationLoop(b),b===null?Si.stop():Si.start()},X.addEventListener("sessionstart",Wl),X.addEventListener("sessionend",Xl),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,P),p=jt.get(b,v.length),p.init(U),v.push(p),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,nt=it.init(this.clippingPlanes,St),m=xt.get(b,S.length),m.init(),S.push(m),X.enabled===!0&&X.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Co(at,U,-1/0,x.sortObjects)}Co(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,et),K=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,K&&Nt.addToRenderList(m,b),this.info.render.frame++,nt===!0&&it.beginShadows();const k=p.state.shadowsArray;yt.render(k,b,U),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const at=U.cameras;if(N.length>0)for(let mt=0,Et=at.length;mt<Et;mt++){const wt=at[mt];Yl(H,N,b,wt)}K&&Nt.render(b);for(let mt=0,Et=at.length;mt<Et;mt++){const wt=at[mt];$l(m,b,wt,wt.viewport)}}else N.length>0&&Yl(H,N,b,U),K&&Nt.render(b),$l(m,b,U);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(x,b,U),de.resetDefaultState(),E=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],nt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Co(b,U,k,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){H&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const mt=q.update(b),Et=b.material;Et.visible&&m.push(b,mt,Et,k,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const mt=q.update(b),Et=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ft.copy(mt.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(Et)){const wt=mt.groups;for(let kt=0,Wt=wt.length;kt<Wt;kt++){const Tt=wt[kt],ee=Et[Tt.materialIndex];ee&&ee.visible&&m.push(b,mt,ee,k,Ft.z,Tt)}}else Et.visible&&m.push(b,mt,Et,k,Ft.z,null)}}const at=b.children;for(let mt=0,Et=at.length;mt<Et;mt++)Co(at[mt],U,k,H)}function $l(b,U,k,H){const N=b.opaque,at=b.transmissive,mt=b.transparent;p.setupLightsView(k),nt===!0&&it.setGlobalState(x.clippingPlanes,k),H&&ct.viewport(L.copy(H)),N.length>0&&ur(N,U,k),at.length>0&&ur(at,U,k),mt.length>0&&ur(mt,U,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Yl(b,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Hi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?lr:ei,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const at=p.state.transmissionRenderTarget[H.id],mt=H.viewport||L;at.setSize(mt.z,mt.w);const Et=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(O),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),K&&Nt.render(k);const wt=x.toneMapping;x.toneMapping=gi;const kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),nt===!0&&it.setGlobalState(x.clippingPlanes,H),ur(b,k,H),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Tt=0,ee=U.length;Tt<ee;Tt++){const fe=U[Tt],pe=fe.object,Ze=fe.geometry,ne=fe.material,Rt=fe.group;if(ne.side===In&&pe.layers.test(H.layers)){const Bn=ne.side;ne.side=tn,ne.needsUpdate=!0,ql(pe,k,H,Ze,ne,Rt),ne.side=Bn,ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}x.setRenderTarget(Et),x.setClearColor(O,G),kt!==void 0&&(H.viewport=kt),x.toneMapping=wt}function ur(b,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=b.length;N<at;N++){const mt=b[N],Et=mt.object,wt=mt.geometry,kt=H===null?mt.material:H,Wt=mt.group;Et.layers.test(k.layers)&&ql(Et,U,k,wt,kt,Wt)}}function ql(b,U,k,H,N,at){b.onBeforeRender(x,U,k,H,N,at),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,k,H,b,at),N.transparent===!0&&N.side===In&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,b,at),N.side=xi,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,b,at),N.side=In):x.renderBufferDirect(k,U,H,N,b,at),b.onAfterRender(x,U,k,H,N,at)}function dr(b,U,k){U.isScene!==!0&&(U=Qt);const H=_t.get(b),N=p.state.lights,at=p.state.shadowsArray,mt=N.state.version,Et=bt.getParameters(b,N.state,at,U,k),wt=bt.getProgramCacheKey(Et);let kt=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?B:M).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Gt),kt=new Map,H.programs=kt);let Wt=kt.get(wt);if(Wt!==void 0){if(H.currentProgram===Wt&&H.lightsStateVersion===mt)return jl(b,Et),Wt}else Et.uniforms=bt.getUniforms(b),b.onBeforeCompile(Et,x),Wt=bt.acquireProgram(Et,wt),kt.set(wt,Wt),H.uniforms=Et.uniforms;const Tt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=it.uniform),jl(b,Et),H.needsLights=Ku(b),H.lightsStateVersion=mt,H.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Wt,H.uniformsList=null,Wt}function Zl(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=to.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function jl(b,U){const k=_t.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Zu(b,U,k,H,N){U.isScene!==!0&&(U=Qt),w.resetTextureUnits();const at=U.fog,mt=H.isMeshStandardMaterial?U.environment:null,Et=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Cs,wt=(H.isMeshStandardMaterial?B:M).get(H.envMap||mt),kt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Wt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,fe=!!k.morphAttributes.color;let pe=gi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=x.toneMapping);const Ze=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=Ze!==void 0?Ze.length:0,Rt=_t.get(H),Bn=p.state.lights;if(nt===!0&&(St===!0||b!==y)){const dn=b===y&&H.id===E;it.setState(H,b,dn)}let ie=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Bn.state.version||Rt.outputColorSpace!==Et||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==wt||H.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==kt||Rt.vertexTangents!==Wt||Rt.morphTargets!==Tt||Rt.morphNormals!==ee||Rt.morphColors!==fe||Rt.toneMapping!==pe||Rt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Rt.__version=H.version);let xn=Rt.currentProgram;ie===!0&&(xn=dr(H,U,N));let Wi=!1,an=!1,Us=!1;const me=xn.getUniforms(),Rn=Rt.uniforms;if(ct.useProgram(xn.program)&&(Wi=!0,an=!0,Us=!0),H.id!==E&&(E=H.id,an=!0),Wi||y!==b){ct.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),jf(lt),Kf(lt),me.setValue(C,"projectionMatrix",lt)):me.setValue(C,"projectionMatrix",b.projectionMatrix),me.setValue(C,"viewMatrix",b.matrixWorldInverse);const ni=me.map.cameraPosition;ni!==void 0&&ni.setValue(C,Bt.setFromMatrixPosition(b.matrixWorld)),vt.logarithmicDepthBuffer&&me.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,an=!0,Us=!0)}if(N.isSkinnedMesh){me.setOptional(C,N,"bindMatrix"),me.setOptional(C,N,"bindMatrixInverse");const dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),me.setValue(C,"boneTexture",dn.boneTexture,w))}N.isBatchedMesh&&(me.setOptional(C,N,"batchingTexture"),me.setValue(C,"batchingTexture",N._matricesTexture,w),me.setOptional(C,N,"batchingIdTexture"),me.setValue(C,"batchingIdTexture",N._indirectTexture,w),me.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(C,"batchingColorTexture",N._colorsTexture,w));const Ns=k.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Ot.update(N,k,xn),(an||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,me.setValue(C,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Rn.envMap.value=wt,Rn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Rn.envMapIntensity.value=U.environmentIntensity),an&&(me.setValue(C,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&ju(Rn,Us),at&&H.fog===!0&&ut.refreshFogUniforms(Rn,at),ut.refreshMaterialUniforms(Rn,H,V,Z,p.state.transmissionRenderTarget[b.id]),to.upload(C,Zl(Rt),Rn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(to.upload(C,Zl(Rt),Rn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(C,"center",N.center),me.setValue(C,"modelViewMatrix",N.modelViewMatrix),me.setValue(C,"normalMatrix",N.normalMatrix),me.setValue(C,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const dn=H.uniformsGroups;for(let ni=0,ii=dn.length;ni<ii;ni++){const Kl=dn[ni];I.update(Kl,xn),I.bind(Kl,xn)}}return xn}function ju(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ku(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,U,k){_t.get(b.texture).__webglTexture=U,_t.get(b.depthTexture).__webglTexture=k;const H=_t.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const k=_t.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,k=0){P=b,T=U,A=k;let H=!0,N=null,at=!1,mt=!1;if(b){const wt=_t.get(b);if(wt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(wt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(wt.__hasExternalTextures)w.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&_t.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(mt=!0);const Wt=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?N=Wt[U][k]:N=Wt[U],at=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?N=_t.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[k]:N=Wt,L.copy(b.viewport),F.copy(b.scissor),z=b.scissorTest}else L.copy(st).multiplyScalar(V).floor(),F.copy(Pt).multiplyScalar(V).floor(),z=Zt;if(ct.bindFramebuffer(C.FRAMEBUFFER,N)&&H&&ct.drawBuffers(b,N),ct.viewport(L),ct.scissor(F),ct.setScissorTest(z),at){const wt=_t.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,k)}else if(mt){const wt=_t.get(b.texture),kt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.__webglTexture,k||0,kt)}E=-1},this.readRenderTargetPixels=function(b,U,k,H,N,at,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){ct.bindFramebuffer(C.FRAMEBUFFER,Et);try{const wt=b.texture,kt=wt.format,Wt=wt.type;if(!vt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&k>=0&&k<=b.height-N&&C.readPixels(U,k,H,N,$t.convert(kt),$t.convert(Wt),at)}finally{const wt=P!==null?_t.get(P).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,H,N,at,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){const wt=b.texture,kt=wt.format,Wt=wt.type;if(!vt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-H&&k>=0&&k<=b.height-N){ct.bindFramebuffer(C.FRAMEBUFFER,Et);const Tt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(U,k,H,N,$t.convert(kt),$t.convert(Wt),0);const ee=P!==null?_t.get(P).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,ee);const fe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Zf(C,fe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Tt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Tt),C.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(b.image.width*H),at=Math.floor(b.image.height*H),mt=U!==null?U.x:0,Et=U!==null?U.y:0;w.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,mt,Et,N,at),ct.unbindTexture()},this.copyTextureToTexture=function(b,U,k=null,H=null,N=0){b.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let at,mt,Et,wt,kt,Wt,Tt,ee,fe;const pe=b.isCompressedTexture?b.mipmaps[N]:b.image;k!==null?(at=k.max.x-k.min.x,mt=k.max.y-k.min.y,Et=k.isBox3?k.max.z-k.min.z:1,wt=k.min.x,kt=k.min.y,Wt=k.isBox3?k.min.z:0):(at=pe.width,mt=pe.height,Et=pe.depth||1,wt=0,kt=0,Wt=0),H!==null?(Tt=H.x,ee=H.y,fe=H.z):(Tt=0,ee=0,fe=0);const Ze=$t.convert(U.format),ne=$t.convert(U.type);let Rt;U.isData3DTexture?(w.setTexture3D(U,0),Rt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Rt=C.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Rt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Bn=C.getParameter(C.UNPACK_ROW_LENGTH),ie=C.getParameter(C.UNPACK_IMAGE_HEIGHT),xn=C.getParameter(C.UNPACK_SKIP_PIXELS),Wi=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt);const Us=b.isDataArrayTexture||b.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Rn=_t.get(b),Ns=_t.get(U),dn=_t.get(Rn.__renderTarget),ni=_t.get(Ns.__renderTarget);ct.bindFramebuffer(C.READ_FRAMEBUFFER,dn.__webglFramebuffer),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Et;ii++)Us&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(b).__webglTexture,N,Wt+ii),b.isDepthTexture?(me&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,N,fe+ii),C.blitFramebuffer(wt,kt,at,mt,Tt,ee,at,mt,C.DEPTH_BUFFER_BIT,C.NEAREST)):me?C.copyTexSubImage3D(Rt,N,Tt,ee,fe+ii,wt,kt,at,mt):C.copyTexSubImage2D(Rt,N,Tt,ee,fe+ii,wt,kt,at,mt);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else me?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Rt,N,Tt,ee,fe,at,mt,Et,Ze,ne,pe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Rt,N,Tt,ee,fe,at,mt,Et,Ze,pe.data):C.texSubImage3D(Rt,N,Tt,ee,fe,at,mt,Et,Ze,ne,pe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Tt,ee,at,mt,Ze,ne,pe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Tt,ee,pe.width,pe.height,Ze,pe.data):C.texSubImage2D(C.TEXTURE_2D,N,Tt,ee,at,mt,Ze,ne,pe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Bn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),N===0&&U.generateMipmaps&&C.generateMipmap(Rt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,H=null,N=0){return b.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,H,N)},this.initRenderTarget=function(b){_t.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class ax extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class So extends Ls{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oo=new R,ao=new R,eh=new ue,Gs=new vo,zr=new xo,ca=new R,nh=new R;class Zn extends be{constructor(t=new Oe,e=new So){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)oo.fromBufferAttribute(e,s-1),ao.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=oo.distanceTo(ao);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;eh.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(eh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),v=Fr(this,t,Gs,l,p,S);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Fr(this,t,Gs,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Fr(this,t,Gs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Fr(this,t,Gs,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fr(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(oo.fromBufferAttribute(o,s),ao.fromBufferAttribute(o,r),e.distanceSqToSegment(oo,ao,ca,nh)>i)return;ca.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ca);if(!(l<t.near||l>t.far))return{distance:l,point:nh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ih=new R,sh=new R;class Su extends Zn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ih.fromBufferAttribute(e,s),sh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ih.distanceTo(sh);t.setAttribute("lineDistance",new ce(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new R,s=[],r=[],o=[],a=new R,l=new ue;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Il extends zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lx extends Il{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Or=new R,ha=new Ul,ua=new Ul,da=new Ul;class cx extends zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new R){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ha.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ua.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),da.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ua.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),da.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ha.calc(l),ua.calc(l),da.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function hx(n,t){const e=1-n;return e*e*t}function ux(n,t){return 2*(1-n)*n*t}function dx(n,t){return n*n*t}function Qs(n,t,e,i){return hx(n,t)+ux(n,e)+dx(n,i)}function fx(n,t){const e=1-n;return e*e*e*t}function px(n,t){const e=1-n;return 3*e*e*n*t}function mx(n,t){return 3*(1-n)*n*n*t}function gx(n,t){return n*n*n*t}function tr(n,t,e,i,s){return fx(n,t)+px(n,e)+mx(n,i)+gx(n,s)}class bu extends zn{constructor(t=new rt,e=new rt,i=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new rt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _x extends zn{constructor(t=new R,e=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y),tr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eu extends zn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xx extends zn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends zn{constructor(t=new rt,e=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new rt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vx extends zn{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y),Qs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(rh(a,l.x,c.x,h.x,u.x),rh(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var ul=Object.freeze({__proto__:null,ArcCurve:lx,CatmullRomCurve3:cx,CubicBezierCurve:bu,CubicBezierCurve3:_x,EllipseCurve:Il,LineCurve:Eu,LineCurve3:xx,QuadraticBezierCurve:wu,QuadraticBezierCurve3:vx,SplineCurve:Tu});class yx extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ul[s.type]().fromJSON(s))}return this}}class dl extends yx{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Eu(this.currentPoint.clone(),new rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new wu(this.currentPoint.clone(),new rt(t,e),new rt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new bu(this.currentPoint.clone(),new rt(t,e),new rt(i,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Tu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Il(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class We extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function S(){const x=new R,D=new R;let T=0;const A=(e-t)/i;for(let P=0;P<=r;P++){const E=[],y=P/r,L=y*(e-t)+t;for(let F=0;F<=s;F++){const z=F/s,O=z*l+a,G=Math.sin(O),W=Math.cos(O);D.x=L*G,D.y=-y*i+m,D.z=L*W,u.push(D.x,D.y,D.z),x.set(G,A,W).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-y),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const y=_[E][P],L=_[E+1][P],F=_[E+1][P+1],z=_[E][P+1];(t>0||E!==0)&&(h.push(y,L,z),T+=3),(e>0||E!==r-1)&&(h.push(L,F,z),T+=3)}c.addGroup(p,T,0),p+=T}function v(x){const D=g,T=new rt,A=new R;let P=0;const E=x===!0?t:e,y=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const O=F/s*l+a,G=Math.cos(O),W=Math.sin(O);A.x=E*W,A.y=m*y,A.z=E*G,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=G*.5+.5,T.y=W*.5*y+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){const z=D+F,O=L+F;x===!0?h.push(O,O+1,z):h.push(O+1,O,z),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nl extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const v=new R,x=new R,D=new R;for(let T=0;T<e.length;T+=3)f(e[T+0],v),f(e[T+1],x),f(e[T+2],D),l(v,x,D,S)}function l(S,v,x,D){const T=D+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const E=S.clone().lerp(x,P/T),y=v.clone().lerp(x,P/T),L=T-P;for(let F=0;F<=L;F++)F===0&&P===T?A[P][F]=E:A[P][F]=E.clone().lerp(y,F/L)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const y=Math.floor(E/2);E%2===0?(d(A[P][y+1]),d(A[P+1][y]),d(A[P][y])):(d(A[P][y+1]),d(A[P+1][y+1]),d(A[P+1][y]))}}function c(S){const v=new R;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(S),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const S=new R;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const x=m(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;o.push(x,1-D)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const v=o[S+0],x=o[S+2],D=o[S+4],T=Math.max(v,x,D),A=Math.min(v,x,D);T>.9&&A<.1&&(v<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),D<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){const x=S*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const S=new R,v=new R,x=new R,D=new R,T=new rt,A=new rt,P=new rt;for(let E=0,y=0;E<r.length;E+=9,y+=6){S.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),D.copy(S).add(v).add(x).divideScalar(3);const L=m(D);_(T,y+0,S,L),_(A,y+2,v,L),_(P,y+4,x,L)}}function _(S,v,x,D){D<0&&S.x===1&&(o[v]=S.x-1),x.x===0&&x.z===0&&(o[v]=D/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.vertices,t.indices,t.radius,t.details)}}const Br=new R,kr=new R,fa=new R,Hr=new gn;class Mx extends Oe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Js*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Hr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Hr.getNormal(fa),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const v=(S+1)%3,x=u[S],D=u[v],T=Hr[h[S]],A=Hr[h[v]],P=`${x}_${D}`,E=`${D}_${x}`;E in d&&d[E]?(fa.dot(d[E].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[E]=null):P in d||(d[P]={index0:c[S],index1:c[v],normal:fa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Br.fromBufferAttribute(a,_),kr.fromBufferAttribute(a,m),f.push(Br.x,Br.y,Br.z),f.push(kr.x,kr.y,kr.z)}this.setAttribute("position",new ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Au extends dl{constructor(t){super(t),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new dl().fromJSON(s))}return this}}const Sx={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Cu(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=Ax(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return rr(r,o,e,a,l,f,0),o}};function Cu(n,t,e,i,s){let r,o;if(s===Ox(n,t,e,i)>0)for(r=t;r<e;r+=i)o=oh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=oh(r,n[r],n[r+1],o);return o&&bo(o,o.next)&&(ar(o),o=o.next),o}function Vi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(bo(e,e.next)||xe(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function rr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Dx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ex(n,i,s,r):bx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ar(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wx(Vi(n),t,e),rr(n,t,e,i,s,r,2)):o===2&&Tx(n,t,e,i,s,r):rr(Vi(n),t,e,i,s,r,1);break}}}function bx(n){const t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ds(s,a,r,l,o,c,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ex(n,t,e,i){const s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=fl(f,g,t,e,i),S=fl(_,m,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ds(a,h,l,u,c,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,l,u,c,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ds(a,h,l,u,c,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wx(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!bo(s,r)&&Ru(s,i,i.next,r)&&or(s,r)&&or(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),ar(i),ar(i.next),i=n=r),i=i.next}while(i!==n);return Vi(i)}function Tx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nx(o,a)){let l=Pu(o,a);o=Vi(o,o.next),l=Vi(l,l.next),rr(o,t,e,i,s,r,0),rr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ax(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Cu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Ux(c));for(s.sort(Cx),r=0;r<s.length;r++)e=Rx(s[r],e);return e}function Cx(n,t){return n.x-t.x}function Rx(n,t){const e=Px(n,t);if(!e)return t;const i=Pu(e,n);return Vi(i,i.next),Vi(e,e.next)}function Px(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ds(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),or(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Lx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Lx(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function Dx(n,t,e,i){let s=n;do s.z===0&&(s.z=fl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ix(s)}function Ix(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function fl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ux(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ds(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Nx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!zx(n,t)&&(or(n,t)&&or(t,n)&&Fx(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||bo(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function bo(n,t){return n.x===t.x&&n.y===t.y}function Ru(n,t,e,i){const s=Gr(xe(n,t,e)),r=Gr(xe(n,t,i)),o=Gr(xe(e,i,n)),a=Gr(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Vr(n,e,t)||r===0&&Vr(n,i,t)||o===0&&Vr(e,n,i)||a===0&&Vr(e,t,i))}function Vr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Gr(n){return n>0?1:n<0?-1:0}function zx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ru(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function or(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function Fx(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Pu(n,t){const e=new pl(n.i,n.x,n.y),i=new pl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function oh(n,t,e,i){const s=new pl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ar(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class er{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return er.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];ah(t),lh(i,t);let o=t.length;e.forEach(ah);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,lh(i,e[l]);const a=Sx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ah(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function lh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class zl extends Oe{constructor(t=new Au([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Bx;let v,x=!1,D,T,A,P;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new R,A=new R,P=new R),d||(m=0,f=0,g=0,_=0);const E=a.extractPoints(c);let y=E.shape;const L=E.holes;if(!er.isClockWise(y)){y=y.reverse();for(let K=0,ot=L.length;K<ot;K++){const C=L[K];er.isClockWise(C)&&(L[K]=C.reverse())}}const z=er.triangulateShape(y,L),O=y;for(let K=0,ot=L.length;K<ot;K++){const C=L[K];y=y.concat(C)}function G(K,ot,C){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ot,C)}const W=y.length,Z=z.length;function V(K,ot,C){let At,tt,vt;const ct=K.x-ot.x,Ut=K.y-ot.y,_t=C.x-K.x,w=C.y-K.y,M=ct*ct+Ut*Ut,B=ct*w-Ut*_t;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(M),Q=Math.sqrt(_t*_t+w*w),q=ot.x-Ut/Y,bt=ot.y+ct/Y,ut=C.x-w/Q,xt=C.y+_t/Q,jt=((ut-q)*w-(xt-bt)*_t)/(ct*w-Ut*_t);At=q+ct*jt-K.x,tt=bt+Ut*jt-K.y;const it=At*At+tt*tt;if(it<=2)return new rt(At,tt);vt=Math.sqrt(it/2)}else{let Y=!1;ct>Number.EPSILON?_t>Number.EPSILON&&(Y=!0):ct<-Number.EPSILON?_t<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(w)&&(Y=!0),Y?(At=-Ut,tt=ct,vt=Math.sqrt(M)):(At=ct,tt=Ut,vt=Math.sqrt(M/2))}return new rt(At/vt,tt/vt)}const J=[];for(let K=0,ot=O.length,C=ot-1,At=K+1;K<ot;K++,C++,At++)C===ot&&(C=0),At===ot&&(At=0),J[K]=V(O[K],O[C],O[At]);const et=[];let st,Pt=J.concat();for(let K=0,ot=L.length;K<ot;K++){const C=L[K];st=[];for(let At=0,tt=C.length,vt=tt-1,ct=At+1;At<tt;At++,vt++,ct++)vt===tt&&(vt=0),ct===tt&&(ct=0),st[At]=V(C[At],C[vt],C[ct]);et.push(st),Pt=Pt.concat(st)}for(let K=0;K<m;K++){const ot=K/m,C=f*Math.cos(ot*Math.PI/2),At=g*Math.sin(ot*Math.PI/2)+_;for(let tt=0,vt=O.length;tt<vt;tt++){const ct=G(O[tt],J[tt],At);lt(ct.x,ct.y,-C)}for(let tt=0,vt=L.length;tt<vt;tt++){const ct=L[tt];st=et[tt];for(let Ut=0,_t=ct.length;Ut<_t;Ut++){const w=G(ct[Ut],st[Ut],At);lt(w.x,w.y,-C)}}}const Zt=g+_;for(let K=0;K<W;K++){const ot=d?G(y[K],Pt[K],Zt):y[K];x?(A.copy(D.normals[0]).multiplyScalar(ot.x),T.copy(D.binormals[0]).multiplyScalar(ot.y),P.copy(v[0]).add(A).add(T),lt(P.x,P.y,P.z)):lt(ot.x,ot.y,0)}for(let K=1;K<=h;K++)for(let ot=0;ot<W;ot++){const C=d?G(y[ot],Pt[ot],Zt):y[ot];x?(A.copy(D.normals[K]).multiplyScalar(C.x),T.copy(D.binormals[K]).multiplyScalar(C.y),P.copy(v[K]).add(A).add(T),lt(P.x,P.y,P.z)):lt(C.x,C.y,u/h*K)}for(let K=m-1;K>=0;K--){const ot=K/m,C=f*Math.cos(ot*Math.PI/2),At=g*Math.sin(ot*Math.PI/2)+_;for(let tt=0,vt=O.length;tt<vt;tt++){const ct=G(O[tt],J[tt],At);lt(ct.x,ct.y,u+C)}for(let tt=0,vt=L.length;tt<vt;tt++){const ct=L[tt];st=et[tt];for(let Ut=0,_t=ct.length;Ut<_t;Ut++){const w=G(ct[Ut],st[Ut],At);x?lt(w.x,w.y+v[h-1].y,v[h-1].x+C):lt(w.x,w.y,u+C)}}}$(),nt();function $(){const K=s.length/3;if(d){let ot=0,C=W*ot;for(let At=0;At<Z;At++){const tt=z[At];Lt(tt[2]+C,tt[1]+C,tt[0]+C)}ot=h+m*2,C=W*ot;for(let At=0;At<Z;At++){const tt=z[At];Lt(tt[0]+C,tt[1]+C,tt[2]+C)}}else{for(let ot=0;ot<Z;ot++){const C=z[ot];Lt(C[2],C[1],C[0])}for(let ot=0;ot<Z;ot++){const C=z[ot];Lt(C[0]+W*h,C[1]+W*h,C[2]+W*h)}}i.addGroup(K,s.length/3-K,0)}function nt(){const K=s.length/3;let ot=0;St(O,ot),ot+=O.length;for(let C=0,At=L.length;C<At;C++){const tt=L[C];St(tt,ot),ot+=tt.length}i.addGroup(K,s.length/3-K,1)}function St(K,ot){let C=K.length;for(;--C>=0;){const At=C;let tt=C-1;tt<0&&(tt=K.length-1);for(let vt=0,ct=h+m*2;vt<ct;vt++){const Ut=W*vt,_t=W*(vt+1),w=ot+At+Ut,M=ot+tt+Ut,B=ot+tt+_t,Y=ot+At+_t;Bt(w,M,B,Y)}}}function lt(K,ot,C){l.push(K),l.push(ot),l.push(C)}function Lt(K,ot,C){Ft(K),Ft(ot),Ft(C);const At=s.length/3,tt=S.generateTopUV(i,s,At-3,At-2,At-1);Qt(tt[0]),Qt(tt[1]),Qt(tt[2])}function Bt(K,ot,C,At){Ft(K),Ft(ot),Ft(At),Ft(ot),Ft(C),Ft(At);const tt=s.length/3,vt=S.generateSideWallUV(i,s,tt-6,tt-3,tt-2,tt-1);Qt(vt[0]),Qt(vt[1]),Qt(vt[3]),Qt(vt[1]),Qt(vt[2]),Qt(vt[3])}function Ft(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Qt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return kx(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ul[s.type]().fromJSON(s)),new zl(i,t.options)}}const Bx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-u),new rt(d,1-g),new rt(_,1-p)]:[new rt(a,1-l),new rt(h,1-u),new rt(f,1-g),new rt(m,1-p)]}};function kx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class fs extends Nl{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fs(t.radius,t.detail)}}class Fl extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],v=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+x,1-v),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const v=h[p][S+1],x=h[p][S],D=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&f.push(v,x,T),(p!==i-1||l<Math.PI)&&f.push(x,D,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ni extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hx extends Ls{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ol extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vx extends Ol{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pa=new ue,ch=new R,hh=new R;class Gx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wx extends Gx{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends Ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Wx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xx extends Ol{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const dh=new ue;class Lu{constructor(t,e,i=0,s=1/0){this.ray=new vo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dh),this}intersectObject(t,e=!0,i=[]){return ml(t,this,i,e),i.sort(fh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ml(t[s],this,i,e);return i.sort(fh),i}}function fh(n,t){return n.distance-t.distance}function ml(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],t,e,!0)}}class ph{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $x extends Su{constructor(t=10,e=10,i=4473924,s=8947848){i=new qt(i),s=new qt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Oe;h.setAttribute("position",new ce(l,3)),h.setAttribute("color",new ce(c,3));const u=new So({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Du extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);const mh={type:"change"},Bl={type:"start"},Iu={type:"end"},Wr=new vo,gh=new di,Yx=Math.cos(70*Yf.DEG2RAD),Te=new R,Ke=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class qx extends Du{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ue,this._lastTargetPosition=new R,this._quat=new Ue().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ph,this._sphericalDelta=new ph,this._scale=1,this._panOffset=new R,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new R,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jx.bind(this),this._onPointerDown=Zx.bind(this),this._onPointerUp=Kx.bind(this),this._onContextMenu=sv.bind(this),this._onMouseWheel=tv.bind(this),this._onKeyDown=ev.bind(this),this._onTouchStart=nv.bind(this),this._onTouchMove=iv.bind(this),this._onMouseDown=Jx.bind(this),this._onMouseMove=Qx.bind(this),this._interceptControlDown=rv.bind(this),this._interceptControlUp=ov.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mh),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ke:i>Math.PI&&(i-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<Yx?this.object.lookAt(this.target):(gh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(gh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function jx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Kx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Iu),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=le.DOLLY;break;case ps.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=le.ROTATE}break;case ps.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Bl)}function Qx(n){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tv(n){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(n.preventDefault(),this.dispatchEvent(Bl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Iu))}function ev(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function nv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=le.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=le.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Bl)}function iv(n){switch(this._trackPointer(n),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=le.NONE}}function sv(n){this.enabled!==!1&&n.preventDefault()}function rv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ov(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pi=new Lu,Xe=new R,ui=new R,_e=new Ue,_h={X:new R(1,0,0),Y:new R(0,1,0),Z:new R(0,0,1)},ga={type:"change"},xh={type:"mouseDown",mode:null},vh={type:"mouseUp",mode:null},yh={type:"objectChange"};class av extends Du{constructor(t,e=null){super(void 0,e);const i=new fv(this);this._root=i;const s=new pv;this._gizmo=s,i.add(s);const r=new mv;this._plane=r,i.add(r);const o=this;function a(v,x){let D=x;Object.defineProperty(o,v,{get:function(){return D!==void 0?D:x},set:function(T){D!==T&&(D=T,r[v]=T,s[v]=T,o.dispatchEvent({type:v+"-changed",value:T}),o.dispatchEvent(ga))}}),o[v]=x,r[v]=x,s[v]=x}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new R,c=new R,h=new Ue,u=new Ue,d=new R,f=new Ue,g=new R,_=new R,m=new R,p=0,S=new R;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",_),a("rotationAxis",m),a("rotationAngle",p),a("eye",S),this._offset=new R,this._startNorm=new R,this._endNorm=new R,this._cameraScale=new R,this._parentPosition=new R,this._parentQuaternion=new Ue,this._parentQuaternionInv=new Ue,this._parentScale=new R,this._worldScaleStart=new R,this._worldQuaternionInv=new Ue,this._worldScale=new R,this._positionStart=new R,this._quaternionStart=new Ue,this._scaleStart=new R,this._getPointer=lv.bind(this),this._onPointerDown=hv.bind(this),this._onPointerHover=cv.bind(this),this._onPointerMove=uv.bind(this),this._onPointerUp=dv.bind(this),e!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Pi.setFromCamera(t,this.camera);const e=_a(this._gizmo.picker[this.mode],Pi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Pi.setFromCamera(t,this.camera);const e=_a(this._plane,Pi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,xh.mode=this.mode,this.dispatchEvent(xh)}}pointerMove(t){const e=this.axis,i=this.mode,s=this.object;let r=this.space;if(i==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Pi.setFromCamera(t,this.camera);const o=_a(this._plane,Pi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(_e.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Xe.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Xe.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(i==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ui.set(a,a,a)}else Xe.copy(this.pointStart),ui.copy(this.pointEnd),Xe.applyQuaternion(this._worldQuaternionInv),ui.applyQuaternion(this._worldQuaternionInv),ui.divide(Xe),e.search("X")===-1&&(ui.x=1),e.search("Y")===-1&&(ui.y=1),e.search("Z")===-1&&(ui.z=1);s.scale.copy(this._scaleStart).multiply(ui),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Xe.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xe.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(_h[e]),Xe.copy(_h[e]),r==="local"&&Xe.applyQuaternion(this.worldQuaternion),Xe.cross(this.eye),Xe.length()===0?l=!0:this.rotationAngle=this._offset.dot(Xe.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(_e.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(_e.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ga),this.dispatchEvent(yh)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(vh.mode=this.mode,this.dispatchEvent(vh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ga),this.dispatchEvent(yh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Pi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function lv(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const t=this.domElement.getBoundingClientRect();return{x:(n.clientX-t.left)/t.width*2-1,y:-(n.clientY-t.top)/t.height*2+1,button:n.button}}}function cv(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function hv(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function uv(n){this.enabled&&this.pointerMove(this._getPointer(n))}function dv(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function _a(n,t,e){const i=t.intersectObject(n,!0);for(let s=0;s<i.length;s++)if(i[s].object.visible||e)return i[s];return!1}const Xr=new Tn,he=new R(0,1,0),Mh=new R(0,0,0),Sh=new ue,$r=new Ue,eo=new Ue,Pn=new R,bh=new ue,qs=new R(1,0,0),Di=new R(0,1,0),Zs=new R(0,0,1),Yr=new R,Ws=new R,Xs=new R;class fv extends be{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class pv extends be{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new yo({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new So({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const h=t.clone();h.color.setHex(255),h.opacity=.5;const u=t.clone();u.opacity=.25;const d=t.clone();d.color.setHex(16776960),d.opacity=.25,t.clone().color.setHex(16776960);const g=t.clone();g.color.setHex(7895160);const _=new We(0,.04,.1,12);_.translate(0,.05,0);const m=new Me(.08,.08,.08);m.translate(0,.04,0);const p=new Oe;p.setAttribute("position",new ce([0,0,0,1,0,0],3));const S=new We(.0075,.0075,.5,3);S.translate(0,.25,0);function v(G,W){const Z=new Ni(G,.0075,3,64,W*Math.PI*2);return Z.rotateY(Math.PI/2),Z.rotateX(Math.PI/2),Z}function x(){const G=new Oe;return G.setAttribute("position",new ce([0,0,0,1,1,1],3)),G}const D={X:[[new ft(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new ft(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new ft(S,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ft(_,o),[0,.5,0]],[new ft(_,o),[0,-.5,0],[Math.PI,0,0]],[new ft(S,o)]],Z:[[new ft(_,a),[0,0,.5],[Math.PI/2,0,0]],[new ft(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new ft(S,a),null,[Math.PI/2,0,0]]],XYZ:[[new ft(new fs(.1,0),u.clone()),[0,0,0]]],XY:[[new ft(new Me(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new ft(new Me(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new Me(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new ft(new We(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ft(new We(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ft(new We(.2,0,.6,4),i),[0,.3,0]],[new ft(new We(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ft(new We(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ft(new We(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ft(new fs(.2,0),i)]],XY:[[new ft(new Me(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ft(new Me(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new Me(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new ft(new fs(.01,2),s),null,null,null,"helper"]],END:[[new ft(new fs(.01,2),s),null,null,null,"helper"]],DELTA:[[new Zn(x(),s),null,null,null,"helper"]],X:[[new Zn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Zn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Zn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},P={XYZE:[[new ft(v(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ft(v(.5,.5),r)]],Y:[[new ft(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new ft(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new ft(v(.75,1),d),null,[0,Math.PI/2,0]]]},E={AXIS:[[new Zn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new ft(new Fl(.25,10,8),i)]],X:[[new ft(new Ni(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ft(new Ni(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ft(new Ni(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ft(new Ni(.75,.1,2,24),i)]]},L={X:[[new ft(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new ft(S,r),[0,0,0],[0,0,-Math.PI/2]],[new ft(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ft(m,o),[0,.5,0]],[new ft(S,o)],[new ft(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ft(m,a),[0,0,.5],[Math.PI/2,0,0]],[new ft(S,a),[0,0,0],[Math.PI/2,0,0]],[new ft(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ft(new Me(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new ft(new Me(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new Me(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ft(new Me(.1,.1,.1),u.clone())]]},F={X:[[new ft(new We(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ft(new We(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ft(new We(.2,0,.6,4),i),[0,.3,0]],[new ft(new We(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ft(new We(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ft(new We(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ft(new Me(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ft(new Me(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ft(new Me(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ft(new Me(.2,.2,.2),i),[0,0,0]]]},z={X:[[new Zn(p,s.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Zn(p,s.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Zn(p,s.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(G){const W=new be;for(const Z in G)for(let V=G[Z].length;V--;){const J=G[Z][V][0].clone(),et=G[Z][V][1],st=G[Z][V][2],Pt=G[Z][V][3],Zt=G[Z][V][4];J.name=Z,J.tag=Zt,et&&J.position.set(et[0],et[1],et[2]),st&&J.rotation.set(st[0],st[1],st[2]),Pt&&J.scale.set(Pt[0],Pt[1],Pt[2]),J.updateMatrix();const $=J.geometry.clone();$.applyMatrix4(J.matrix),J.geometry=$,J.renderOrder=1/0,J.position.set(0,0,0),J.rotation.set(0,0,0),J.scale.set(1,1,1),W.add(J)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(D)),this.add(this.gizmo.rotate=O(P)),this.add(this.gizmo.scale=O(L)),this.add(this.picker.translate=O(T)),this.add(this.picker.rotate=O(y)),this.add(this.picker.scale=O(F)),this.add(this.helper.translate=O(A)),this.add(this.helper.rotate=O(E)),this.add(this.helper.scale=O(z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:eo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(_e.setFromEuler(Xr.set(0,0,0)),o.quaternion.copy(i).multiply(_e),Math.abs(he.copy(qs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(_e.setFromEuler(Xr.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(_e),Math.abs(he.copy(Di).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(_e.setFromEuler(Xr.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(_e),Math.abs(he.copy(Zs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(_e.setFromEuler(Xr.set(0,Math.PI/2,0)),he.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Sh.lookAt(Mh,he,Di)),o.quaternion.multiply(_e),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Xe.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xe.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Xe),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(he.copy(qs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(he.copy(Di).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(he.copy(Zs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(he.copy(Zs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(he.copy(qs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(he.copy(Di).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&($r.copy(i),he.copy(this.eye).applyQuaternion(_e.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Sh.lookAt(this.eye,Mh,Di)),o.name==="X"&&(_e.setFromAxisAngle(qs,Math.atan2(-he.y,he.z)),_e.multiplyQuaternions($r,_e),o.quaternion.copy(_e)),o.name==="Y"&&(_e.setFromAxisAngle(Di,Math.atan2(he.x,he.z)),_e.multiplyQuaternions($r,_e),o.quaternion.copy(_e)),o.name==="Z"&&(_e.setFromAxisAngle(Zs,Math.atan2(he.y,he.x)),_e.multiplyQuaternions($r,_e),o.quaternion.copy(_e))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(t)}}class mv extends ft{constructor(){super(new cr(1e5,1e5,2,2),new yo({visible:!1,wireframe:!0,side:In,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Yr.copy(qs).applyQuaternion(e==="local"?this.worldQuaternion:eo),Ws.copy(Di).applyQuaternion(e==="local"?this.worldQuaternion:eo),Xs.copy(Zs).applyQuaternion(e==="local"?this.worldQuaternion:eo),he.copy(Ws),this.mode){case"translate":case"scale":switch(this.axis){case"X":he.copy(this.eye).cross(Yr),Pn.copy(Yr).cross(he);break;case"Y":he.copy(this.eye).cross(Ws),Pn.copy(Ws).cross(he);break;case"Z":he.copy(this.eye).cross(Xs),Pn.copy(Xs).cross(he);break;case"XY":Pn.copy(Xs);break;case"YZ":Pn.copy(Yr);break;case"XZ":he.copy(Xs),Pn.copy(Ws);break;case"XYZ":case"E":Pn.set(0,0,0);break}break;case"rotate":default:Pn.set(0,0,0)}Pn.length()===0?this.quaternion.copy(this.cameraQuaternion):(bh.lookAt(Xe.set(0,0,0),Pn,he),this.quaternion.setFromRotationMatrix(bh)),super.updateMatrixWorld(t)}}const gv=42;class _v{constructor(t,e,i,s={}){this.canvas=t,this.fallback=e,this.onSelect=i,this.hooks=s;try{const f=new ox({canvas:t,antialias:!0,preserveDrawingBuffer:!0,alpha:!1});if(!f.getContext())throw new Error("webgl");f.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),f.outputColorSpace=hn,f.setClearColor(15986406,1),this.renderer=f,this.ready=!0}catch{t.hidden=!0,e.hidden=!1;return}this.scene.add(new Vx(16775407,12034700,.95)),this.scene.add(new Xx(16777215,.25));const r=new uh(16774372,1.35);r.position.set(120,220,80),this.scene.add(r);const o=new uh(14148335,.45);o.position.set(-160,60,-40),this.scene.add(o);const a=new $x(600,60,13219738,15063238);a.position.y=0,this.scene.add(a),this.scene.add(this.root);const l=new qx(this.camera,t);l.enableDamping=!1,l.rotateSpeed=.85,l.zoomSpeed=.9,l.maxPolarAngle=Math.PI*.495,l.target.set(70,40,40),this.controls=l,this.camera.position.set(180,140,220);const c=new av(this.camera,t);c.size=1.85,c.space="world",c.mode="translate",c.translationSnap=1,this.scene.add(c.getHelper()),c.addEventListener("dragging-changed",f=>{const g=!!f.value;this.controls&&(this.controls.enabled=!g)}),c.addEventListener("mouseDown",()=>this.onGizmoDown()),c.addEventListener("objectChange",()=>this.onGizmoChange()),c.addEventListener("mouseUp",()=>this.onGizmoUp()),this.gizmo=c;const h=t.parentElement??t;this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(h);let u=0,d=0;t.addEventListener("pointerdown",f=>{u=f.clientX,d=f.clientY}),t.addEventListener("pointerup",f=>{this.gizmo?.dragging||this.gizmo?.axis||Math.hypot(f.clientX-u,f.clientY-d)>8||this.pick(f)}),this.resize(),this.render()}renderer=null;scene=new ax;camera=new mn(42,1,.5,8e3);controls=null;root=new Oi;raycaster=new Lu;pointer=new rt;materials=[];signature="";ready=!1;resizeObserver=null;gizmo=null;gizmoMode="translate";moveSnap=1;angleSnap=null;baseSize=new R(1,1,1);dragStarts=new Map;get available(){return this.ready}update(t,e,i,s,r){if(!this.renderer)return;this.materials=e;const o=`${s??""}::${t.map(a=>[a.id,a.materialId,a.position.x,a.position.y,a.position.z,a.size.x,a.size.y,a.size.z,a.longAxis,a.rotation?.x??0,a.rotation?.y??0,a.rotation?.z??0,a.locked?1:0].join(",")).join("|")}`;o!==this.signature&&(this.signature=o,this.rebuild(t,s),this.syncGizmo(s)),this.applyExplode(i),r&&this.frame(),this.render()}frame(){if(!this.controls)return;const t=new Ps().setFromObject(this.root);if(t.isEmpty())return;const e=t.getCenter(new R),i=t.getSize(new R),s=Math.max(i.x,i.y,i.z,40);this.camera.position.set(e.x+s*.9,e.y+s*.72,e.z+s*1.25),this.controls.target.copy(e),this.controls.target.y-=s*.12,this.camera.near=Math.max(.2,s/250),this.camera.far=s*40,this.camera.updateProjectionMatrix(),this.controls.update()}capture(){if(!this.renderer)return"";this.render();try{return this.renderer.domElement.toDataURL("image/png")}catch{return""}}setMode(t){this.gizmoMode=t,this.gizmo&&(this.gizmo.mode=t,this.gizmo.space=t==="translate"?"world":"local",this.render())}setSnaps(t,e){this.moveSnap=t,this.angleSnap=e,this.gizmo&&(this.gizmo.translationSnap=t,this.gizmo.rotationSnap=e?e*Math.PI/180:null,this.gizmo.scaleSnap=t?.1:null)}syncGizmo(t){if(!this.gizmo)return;const e=this.root.children.find(i=>i.userData.partId===t&&!i.userData.locked);e?this.gizmo.attach(e):this.gizmo.detach(),this.setMode(this.gizmoMode),this.setSnaps(this.moveSnap,this.angleSnap)}onGizmoDown(){const t=this.gizmo?.object;if(!t)return;const e=t.userData.size;this.baseSize.copy(e),this.dragStarts.clear();for(const i of this.root.children)this.dragStarts.set(String(i.userData.partId),i.position.clone());this.hooks.onGestureStart?.()}onGizmoChange(){const t=this.gizmo?.object;if(!t||this.gizmo?.mode!=="translate"||!t.userData.groupId){this.render();return}const e=this.dragStarts.get(String(t.userData.partId));if(!e){this.render();return}const i=t.position.clone().sub(e);for(const s of this.root.children){if(s===t||s.userData.locked||s.userData.groupId!==t.userData.groupId)continue;const r=this.dragStarts.get(String(s.userData.partId));r&&s.position.copy(r).add(i)}this.render()}onGizmoUp(){const t=this.gizmo?.object,e=t?.userData.source;if(!t||!e)return;const i=t.scale.clone(),s=Math.abs(i.x-1)>.001||Math.abs(i.y-1)>.001||Math.abs(i.z-1)>.001,r={x:Math.max(.4,this.baseSize.x*(s?i.x:1)),y:Math.max(.4,this.baseSize.y*(s?i.y:1)),z:Math.max(.4,this.baseSize.z*(s?i.z:1))};t.scale.set(1,1,1);const o=uo({x:t.rotation.x*180/Math.PI,y:t.rotation.y*180/Math.PI,z:t.rotation.z*180/Math.PI}),a={...e,position:{x:os(t.position.x-r.x/2),y:os(t.position.y-r.y/2),z:os(t.position.z-r.z/2)},size:{x:os(r.x),y:os(r.y),z:os(r.z)},rotation:o,explode:{...e.explode},freeSize:e.freeSize||s,longAxis:s?yl(r):e.longAxis};this.hooks.onCommit?.(a)}rebuild(t,e){this.clearRoot();for(const i of t){const s=ze(this.materials,i.materialId)??this.materials[0],r=new Oi,o=un(i);r.userData.partId=i.id,r.userData.source=i,r.userData.groupId=i.groupId,r.userData.locked=!!i.locked,r.userData.size=new R(i.size.x,i.size.y,i.size.z),r.userData.explode=new R(i.explode.x,i.explode.y,i.explode.z),r.position.set(i.position.x+i.size.x/2,i.position.y+i.size.y/2,i.position.z+i.size.z/2),r.rotation.set(o.x*Math.PI/180,o.y*Math.PI/180,o.z*Math.PI/180);const a=new Oi;r.userData.visual=a,r.add(a);const l=!s||s.category==="sheet"||s.category==="lumber",c=new qt(s?.color||"#c4a574"),h=new Hx({color:c,roughness:l?.78:.42,metalness:l?.02:.62});i.id===e&&(h.emissive=new qt(9060132),h.emissiveIntensity=.28);const u=xv(i,s,h);for(const d of u){const f=new Mx(d.geometry,18),g=new Su(f,new So({color:i.locked?10300460:2892056}));g.raycast=()=>{},d.add(g),a.add(d)}this.root.add(r)}}applyExplode(t){const e=Math.min(1,Math.max(0,t));for(const i of this.root.children){const s=i.userData.visual,r=i.userData.explode;!s||!r||s.position.copy(r).multiplyScalar(e*gv)}}pick(t){if(!this.renderer||!this.camera)return;const e=this.canvas.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const s=this.raycaster.intersectObjects(this.root.children,!0).find(a=>a.object.visible);let r=null,o=s?.object??null;for(;o;){if(typeof o.userData?.partId=="string"){r=o.userData.partId;break}o=o.parent}this.onSelect(r)}resize(){if(!this.renderer)return;const t=this.canvas.parentElement,e=t?.clientWidth??600,i=t?.clientHeight??400;e<2||i<2||(this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i,!1),this.render())}render(){this.renderer&&(this.controls?.update(),this.renderer.render(this.scene,this.camera))}clearRoot(){this.gizmo?.detach();for(const t of[...this.root.children])t.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose();const s=i.material;Array.isArray(s)?s.forEach(r=>r.dispose()):s&&"dispose"in s&&s.dispose()}),this.root.remove(t)}}function os(n){return Math.round(n*10)/10}function xv(n,t,e){if(t?.category==="tube"){const r=(t.wallMm??2)/10,{w:o,h:a,length:l,rotation:c}=vv(n),h=yv(o,a,r),u=new zl(h,{depth:l,bevelEnabled:!1,steps:1});u.translate(0,0,-l/2);const d=new ft(u,e);return d.rotation.set(c[0],c[1],0),d.userData.partId=n.id,[d]}if(t?.category==="angle")return Mv(n,(t.wallMm??3)/10,e);const i=new Me(n.size.x,n.size.y,n.size.z),s=new ft(i,e);return s.userData.partId=n.id,[s]}function vv(n){return n.longAxis==="x"?{w:n.size.z,h:n.size.y,length:n.size.x,rotation:[0,-Math.PI/2]}:n.longAxis==="y"?{w:n.size.x,h:n.size.z,length:n.size.y,rotation:[-Math.PI/2,0]}:{w:n.size.x,h:n.size.y,length:n.size.z,rotation:[0,0]}}function yv(n,t,e){const i=new Au,s=n/2,r=t/2;i.moveTo(-s,-r),i.lineTo(s,-r),i.lineTo(s,r),i.lineTo(-s,r),i.closePath();const o=s-e,a=r-e;if(o>.08&&a>.08){const l=new dl;l.moveTo(-o,-a),l.lineTo(-o,a),l.lineTo(o,a),l.lineTo(o,-a),l.closePath(),i.holes.push(l)}return i}function Mv(n,t,e){const i=n.size.x,s=n.size.y,r=n.size.z,o=[],a=(l,c,h,u,d,f)=>{const g=new ft(new Me(Math.max(l,.1),Math.max(c,.1),Math.max(h,.1)),o.length===0?e:e.clone());g.position.set(u,d,f),g.userData.partId=n.id,o.push(g)};return n.longAxis==="y"?(a(t,s,r,-i/2+t/2,0,0),a(i,s,t,0,0,-r/2+t/2)):n.longAxis==="x"?(a(i,t,r,0,-s/2+t/2,0),a(i,s,t,0,0,-r/2+t/2)):(a(t,s,r,-i/2+t/2,0,0),a(i,t,r,0,-s/2+t/2,0)),o}function Sv(n,t){return ze(n,t==="tube"?"st40x40x2":"pine50x50")??n.find(i=>i.category===(t==="tube"?"tube":"lumber"))??n[0]}function Uu(n){return qe(n)??{w:4,h:4}}const gl="rahitiim.projects.v1",_l="rahitiim.materials.v1",xl="rahitiim.active.v1";function Eh(n){try{const t=localStorage.getItem(n);return t?JSON.parse(t):null}catch{return null}}function bv(){const n=Eh(_l),t=Eh(gl),e=localStorage.getItem(xl);return{materials:Array.isArray(n)&&n.length?n:Dh(Lh),projects:Array.isArray(t)?t:[],activeId:e}}function Ev(n,t,e){try{return localStorage.setItem(_l,JSON.stringify(t)),localStorage.setItem(gl,JSON.stringify(n)),localStorage.setItem(xl,e),null}catch{try{const i=n.map(s=>({...s,referenceImage:void 0}));return localStorage.setItem(gl,JSON.stringify(i)),localStorage.setItem(_l,JSON.stringify(t)),localStorage.setItem(xl,e),"התמונה גדולה מדי ולא נשמרה. שאר הפרויקט נשמר."}catch{return"הדפדפן לא הצליח לשמור. נסו לייצא קובץ JSON."}}}const nr=bv();let ve=nr.projects,It=nr.materials,nn=nr.activeId&&ve.some(n=>n.id===nr.activeId)?nr.activeId:"",xs="template",hr=null,Ee=[],kl=!1,Ts="translate",Nu=0,sn=!0,yi=It[0]?.id??"",wh=0;const Sn=new URLSearchParams(location.search).get("demo"),as=new URLSearchParams(location.search).get("tab"),js=new URLSearchParams(location.search).get("gizmo");(js==="translate"||js==="rotate"||js==="scale")&&(Ts=js);if(Sn==="free"){const n=Hd(It);ve=[n,...ve.filter(t=>t.id!==n.id)],nn=n.id,hr="brace",Ee=["brace"],js||(Ts="rotate")}if(Sn==="table"||Sn==="cabinet"||Sn==="bench"||Sn==="shelf"||Sn==="bed"||Sn==="desk"||Sn==="tv"||Sn==="workbench"||Sn==="stool"){const n=As(Sn,It);ve=[n,...ve.filter(t=>t.id!==n.id)],nn=n.id}if(!nn||!ve.some(n=>n.id===nn)){const n=As("table",It);ve=[n,...ve],nn=n.id}(as==="template"||as==="edit"||as==="draw"||as==="bom"||as==="files")&&(xs=as);const Th=document.querySelector("#version");Th&&(Th.textContent=mo);const lo=document.querySelector("#project-select"),wv=document.querySelector("#stats"),Tv=document.querySelector("#detach"),jn=document.querySelector("#panel"),Je={template:jn.querySelector('[data-pane="template"]'),edit:jn.querySelector('[data-pane="edit"]'),draw:jn.querySelector('[data-pane="draw"]'),bom:jn.querySelector('[data-pane="bom"]'),files:jn.querySelector('[data-pane="files"]')},Av=document.querySelector("#report"),qr=document.querySelector("#toast"),xa=document.querySelector("#update-banner"),Is=new _v(document.querySelector("#c3d"),document.querySelector("#fallback"),n=>{Ae(kl&&n?Ee.includes(n)?Ee.filter(t=>t!==n):[...Ee,n]:n?[n]:[]),Ie(!1),Be.redraw(),ke(),on()},{onGestureStart:()=>Ou(),onCommit:n=>{ho(n),To(),Be.redraw(),ke()}});Is.setMode(Ts);Is.setSnaps(1,null);const Cv={getProject:()=>Dt(),getMaterials:()=>It,getSelected:()=>hr,select:n=>{Ae(n?[n]:[]),Ie(!1),Be.redraw(),on()},commitPart:n=>ho(n),addPart:n=>Fu(n),deleteSelected:()=>Hl(),beginGesture:()=>Ou(),endGesture:()=>To(),patchReference:n=>{Object.assign(Dt(),n),re()},toast:Fe},Be=new Sd(Je.edit,Cv);document.querySelector("#explode").addEventListener("input",n=>{Nu=Number(n.target.value),Ie(!1)});document.querySelector("#reset-cam").addEventListener("click",()=>{sn=!0,Ie(!0),sn=!1});document.querySelector("#print-btn").addEventListener("click",Xu);document.querySelectorAll(".tabbar button").forEach(n=>{n.addEventListener("click",()=>{xs=n.dataset.tab,rn(),xs==="edit"&&requestAnimationFrame(()=>Be.redraw())})});lo.addEventListener("change",()=>{nn=lo.value,Ae([]),sn=!0;const n=Dt();n.detached||An(n,It),re(),rn()});jn.addEventListener("input",n=>{const t=n.target;t.dataset.param?zu(t.dataset.param,t.type==="checkbox"?t.checked:Number(t.value)):t.dataset.stock?Pv(t.dataset.stock,Number(t.value)):t.dataset.hardware?Lv(t.dataset.hardware,Number(t.value)):t.dataset.material&&Gv(t.dataset.material,t.value)});jn.addEventListener("change",n=>{const t=n.target;if(t.dataset.param&&(t.tagName==="SELECT"||t.type==="checkbox")){const e=t.type==="checkbox"?t.checked:t.value;zu(t.dataset.param,e),ke()}else if(t.dataset.action==="part-material")Dv(t.dataset.id||"",t.value);else if(t.dataset.action==="edit-material")yi=t.value,ke();else if(t.dataset.import!==void 0&&t instanceof HTMLInputElement){const e=t.files?.[0];e&&Bv(e),t.value=""}});jn.addEventListener("click",n=>{const t=n.target.closest("button");if(!t||!jn.contains(t))return;const e=t.dataset.action;if(e==="template")Iv(t.dataset.id);else if(e==="free")Xv();else if(e==="unlock")$v();else if(e==="reset")Fn(),Dt().templateId==="free"?Dt().parts=[]:kd(Dt(),It),Ae([]),re(),sn=!0,rn();else if(e==="select"){const i=t.dataset.id??"";Ae(kl&&i?Ee.includes(i)?Ee.filter(s=>s!==i):[...Ee,i]:i?[i]:[]),Ie(!1),Be.redraw(),ke(),on()}else if(e==="describe")Uv();else if(e==="dup-part")ku();else if(e==="mirror-part")Hu();else if(e==="group")Vu();else if(e==="ungroup")Gu();else if(e==="lock")Wu();else if(e==="delete-part")Hl();else if(e==="undo")Vl();else if(e==="redo")Gl();else if(e==="new"){const i=As(Dt().templateId==="free"?"table":Dt().templateId,It);ve.unshift(i),nn=i.id,Ae([]),sn=!0,re(),rn()}else e==="duplicate"?zv():e==="delete-project"?Fv():e==="export"?Ov():e==="open-project"?(nn=t.dataset.id||nn,Ae([]),sn=!0,Dt().detached||An(Dt(),It),re(),rn()):e==="add-material"?kv():e==="delete-material"?Hv():e==="reset-materials"&&Vv()});document.querySelector("#report").addEventListener("click",n=>{const t=n.target.closest("button");t&&(t.dataset.report==="back"&&document.body.classList.remove("preview-report"),t.dataset.report==="print"&&window.print())});window.addEventListener("beforeprint",()=>{document.body.classList.contains("preview-report")||Xu()});const vl=document.querySelector("#gizmo-dock");vl.addEventListener("click",n=>{const t=n.target.closest("button");if(!t||!vl.contains(t))return;const e=t.dataset.gizmo;if(e==="translate"||e==="rotate"||e==="scale"){Ts=e,Is.setMode(Ts),on();return}if(t.dataset.add){Fu(t.dataset.add);return}const i=t.dataset.action;i==="undo"?Vl():i==="redo"?Gl():i==="dup-part"?ku():i==="mirror-part"?Hu():i==="group"?Vu():i==="ungroup"?Gu():i==="lock"?Wu():i==="delete-part"&&Hl()});vl.addEventListener("input",n=>{const t=n.target;if(t.id==="snap-move"||t.id==="snap-angle"){const i=document.querySelector("#snap-move")?.checked??!1,s=document.querySelector("#snap-angle")?.checked??!1;Be.setMoveSnap(i);const r=Number(document.querySelector("[data-snap]")?.value)||1;Is.setSnaps(i?r:null,s?15:null);return}if(t.id==="multi-select"){kl=t.checked;return}if(!t.dataset.axis)return;const e=Ao();e&&Wv(e,t.dataset.axis,t.dataset.axis==="name"?t.value:Number(t.value))});window.addEventListener("keydown",n=>{const t=n.target;t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="z"&&(n.preventDefault(),n.shiftKey?Gl():Vl())});Zv();rn();Yu();function Dt(){return ve.find(n=>n.id===nn)??ve[0]}function zu(n,t){const e=Dt();n==="doors"&&(t=String(t)),!(typeof t=="number"&&!Number.isFinite(t))&&(Bd(e,It,n,t),n==="topMaterial"&&Rv(e),re(),Ie(!1),Cn(),Be.redraw())}function Rv(n){const t=ze(It,String(n.params.topMaterial??""));if(t){if(t.category==="sheet"&&(n.params.topThickness=Qe(t)),t.category==="lumber"){const e=Uu(t);n.params.topThickness=Math.min(e.w,e.h)}n.detached||An(n,It)}}function Pv(n,t){if(!Number.isFinite(t))return;Dt().stock[n]=t,re(),Cn();const e=Je.bom.querySelector("#bom-results");e&&(e.innerHTML=tf(Dt(),It))}function Lv(n,t){Number.isFinite(t)&&(Dt().hardwareOverrides[n]=t,re())}function Dv(n,t){const e=Dt(),i=ze(It,t);if(i){if(e.materialOverrides[n]=t,e.detached){const s=e.parts.find(r=>r.id===n);if(s){const r=e.parts.indexOf(s);e.parts[r]=s.freeSize?{...s,materialId:t}:Ih(s,i)}}else An(e,It);re(),Ie(!1),Cn(),Be.redraw()}}function Iv(n){!n||n==="free"||n===Dt().templateId||Dt().detached&&!window.confirm("החלפת תבנית מוחקת את העריכה הידנית בפריט הזה.")||(kh(Dt(),n,It),Ae([]),sn=!0,re(),rn())}async function Uv(){const n=document.querySelector("#describe-text")?.value??"",t=await Md(n),e=Dt();t.templateId&&t.templateId!==e.templateId&&kh(e,t.templateId,It),e.detached=!1,t.length!==void 0&&(e.params.length=t.length),t.depth!==void 0&&(e.params.depth=t.depth),t.height!==void 0&&(e.params.height=t.height),t.shelves!==void 0&&(e.params.shelves=t.shelves),t.doors!==void 0&&(e.params.doors=String(t.doors)),t.drawers!==void 0&&(e.params.drawers=t.drawers),An(e,It),sn=!0,re(),Fe(t.note),rn()}function Fu(n){const t=Dt(),e=ze(It,"ply18")??It.find(r=>r.category==="sheet")??It[0],i=Nv(n,e,It,t.parts.length);Fn(),t.detached=!0;const s=t.parts.length===0;t.parts.push(i),Ae([i.id]),re(),Ie(s),Cn(),Be.redraw(),ke(),on()}function Nv(n,t,e,i){const s={id:Mi("part"),origin:"user",explode:{x:.2,y:.6,z:.2},role:"custom"},r={x:i%4*8,y:0,z:Math.floor(i/4)*8};if(n==="tube"||n==="lumber"||n==="flat"||n==="angle"){const o=n==="tube"?"tube":n==="lumber"?"lumber":n==="flat"?"flat":"angle",l=ze(e,n==="tube"?"st40x40x2":n==="lumber"?"pine50x50":n==="flat"?"fl40x4":"an40x40x4")??e.find(u=>u.category===o)??(o==="tube"||o==="lumber"?Sv(e,o):e[0]),c=Uu(l);return{...s,name:n==="tube"?"צינור":n==="lumber"?"קורה":n==="flat"?"פס":"זווית",materialId:l.id,position:r,size:{x:c.w,y:40,z:c.h},longAxis:"y"}}return n==="box"?{...s,name:"תיבה",materialId:t.id,position:r,size:{x:20,y:20,z:20},longAxis:"x",freeSize:!0}:{...s,name:"לוח",role:"panel",materialId:t.id,position:{x:r.x,y:40,z:r.z},size:{x:40,y:Qe(t),z:30},longAxis:"x",thicknessAxis:"y"}}function Hl(){if(!Ee.length){Fe("בחרו חלק למחיקה.");return}const n=Dt();Fn(),n.detached=!0;const t=new Set(Ee);n.parts=n.parts.filter(e=>!t.has(e.id)),Ae([]),re(),Ie(!1),Cn(),Be.redraw(),ke(),on()}function zv(){const n=structuredClone(Dt());n.id=Mi("prj"),n.name=`${n.name} עותק`,n.nameCustom=!0,n.createdAt=Date.now(),n.updatedAt=Date.now(),ve.unshift(n),nn=n.id,sn=!0,re(),rn()}function Fv(){const n=Dt();window.confirm(`למחוק את "${n.name}"?`)&&(ve=ve.filter(t=>t.id!==n.id),ve.length===0&&(ve=[As("table",It)]),nn=ve[0].id,Ae([]),sn=!0,re(),rn())}function Ov(){const n=Dt(),t=new Set(n.parts.map(r=>r.materialId)),e={kind:"rahitiim-project",version:1,appVersion:mo,project:n,materials:It.filter(r=>t.has(r.id)||r.custom)},i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=`${n.name||"rahitiim"}.json`,s.click(),URL.revokeObjectURL(s.href)}async function Bv(n){try{const t=JSON.parse(await n.text()),e=Array.isArray(t.materials)?t.materials:[];for(const s of e)It.some(r=>r.id===s.id)||It.push(s);let i=t.kind==="rahitiim-project"?t.project:t.templateId&&t.parts?t:void 0;if(!i||!Array.isArray(i.parts)){Fe("הקובץ אינו פרויקט של רהיטים.");return}i=structuredClone(i),i.id=Mi("prj"),i.updatedAt=Date.now(),i.stock||(i.stock=As("table",It).stock),i.referenceOffset||(i.referenceOffset={x:0,y:0,z:0}),ve.unshift(i),nn=i.id,sn=!0,re(),Fe("הפרויקט יובא."),rn()}catch{Fe("לא הצלחנו לקרוא את הקובץ.")}}function kv(){const n=ze(It,yi)??It[0],t={...n,id:Mi("mat"),name:`${n.name} עותק`,custom:!0};It.push(t),yi=t.id,re(),ke()}function Hv(){const n=ze(It,yi);if(!n)return;if(ve.some(e=>e.parts.some(i=>i.materialId===n.id)||Object.values(e.params).includes(n.id))){Fe("החומר בשימוש בפרויקט ולא נמחק.");return}It.length<2||(It=It.filter(e=>e.id!==n.id),yi=It[0].id,re(),ke())}function Vv(){window.confirm("לאפס את ספריית החומרים לברירת המחדל?")&&(It=Dh(),yi=It[0].id,Dt().detached||An(Dt(),It),re(),rn())}function Gv(n,t){const e=ze(It,yi);if(e){if(n==="name")e.name=t||e.name;else if(n==="color")e.color=t;else{const i=Number(t);if(!Number.isFinite(i))return;n==="density"?e.density=i:n==="thicknessMm"?e.thicknessMm=i:n==="sectionWmm"?e.sectionWmm=i:n==="sectionHmm"?e.sectionHmm=i:n==="outerWmm"?e.outerWmm=i:n==="outerHmm"?e.outerHmm=i:n==="wallMm"?e.wallMm=i:n==="flatWmm"?e.flatWmm=i:n==="flatTmm"?e.flatTmm=i:n==="legAmm"?e.legAmm=i:n==="legBmm"&&(e.legBmm=i)}!Dt().detached&&n!=="name"&&n!=="color"&&n!=="density"&&An(Dt(),It),re(),Ie(!1),Cn()}}const _i=[],Eo=[];let pi=null;function Ae(n){Ee=[...new Set(n.filter(Boolean))],hr=Ee[Ee.length-1]??null}function wo(){return{parts:structuredClone(Dt().parts),detached:Dt().detached}}function Ou(){pi||(pi=wo())}function To(){if(!pi)return;(JSON.stringify(Dt().parts)!==JSON.stringify(pi.parts)||Dt().detached!==pi.detached)&&(_i.push(pi),_i.length>40&&_i.shift(),Eo.length=0),pi=null}function Fn(){pi||(_i.push(wo()),_i.length>40&&_i.shift(),Eo.length=0)}function Bu(n){Dt().parts=n.parts,Dt().detached=n.detached,Ae(Ee.filter(t=>n.parts.some(e=>e.id===t))),re(),Ie(!1),Cn(),Be.redraw(),ke(),on()}function Vl(){To();const n=_i.pop();n&&(Eo.push(wo()),Bu(n))}function Gl(){To();const n=Eo.pop();n&&(_i.push(wo()),Bu(n))}function Ao(){return Dt().parts.find(n=>n.id===hr)}function co(n){return{...n,position:{...n.position},size:{...n.size},explode:{...n.explode},rotation:n.rotation?{...n.rotation}:void 0}}function Ah(n,t){return Math.abs(n.x-t.x)<.001&&Math.abs(n.y-t.y)<.001&&Math.abs(n.z-t.z)<.001}function ho(n){const t=Dt(),e=t.parts.find(l=>l.id===n.id);if(!e||e.locked)return;Fn(),t.detached=!0;const i=n.position.x-e.position.x,s=n.position.y-e.position.y,r=n.position.z-e.position.z,o=Math.hypot(i,s,r)>.001,a=!!e.groupId&&o&&Ah(e.size,n.size)&&Ah(un(e),un(n));t.parts=t.parts.map(l=>l.id===n.id?n:a&&l.groupId===e.groupId&&!l.locked?{...l,position:{x:l.position.x+i,y:l.position.y+s,z:l.position.z+r}}:l),Ee.includes(n.id)?Ae([...Ee.filter(l=>l!==n.id),n.id]):Ae([n.id]),re(),Ie(!1),Cn(),on()}function Wv(n,t,e){if(n.locked)return;if(t==="name"&&typeof e=="string"){ho({...co(n),name:e||n.name}),Be.redraw();return}const i=Number(e);if(!Number.isFinite(i))return;const s=co(n);if((t==="x"||t==="y"||t==="z")&&(s.position[t]=i-s.size[t]/2),t==="sx"&&(s.size.x=Math.max(.4,i)),t==="sy"&&(s.size.y=Math.max(.4,i)),t==="sz"&&(s.size.z=Math.max(.4,i)),(t==="sx"||t==="sy"||t==="sz")&&(s.freeSize=!0,s.longAxis=yl(s.size)),t==="rx"||t==="ry"||t==="rz"){const r=un(s);r[t.slice(1)]=i,s.rotation=uo(r)}ho(s),Be.redraw(),ke()}function Xv(){const n=Bh(It);ve.unshift(n),nn=n.id,Ae([]),sn=!0,re(),rn(),Fe("סצנה ריקה. הוסיפו חלקים וסובבו כל אחד בנפרד.")}function $v(){const n=Dt();if(n.detached){Fe("החלקים כבר עצמאיים.");return}Fn(),n.detached=!0,re(),rn(),Fe("כל חלק עומד בפני עצמו. אין סימטריה כפויה.")}function ku(){const n=Ao();if(!n){Fe("בחרו חלק לשכפול.");return}Fn();const t=co(n);t.id=Mi("part"),t.groupId=void 0,t.locked=!1,t.origin="user",t.position={x:n.position.x+6,y:n.position.y,z:n.position.z+6};const e=Dt();e.detached=!0,e.parts.push(t),Ae([t.id]),re(),Ie(!1),Cn(),Be.redraw(),ke(),on()}function Hu(){const n=Ao();if(!n){Fe("בחרו חלק לשיקוף.");return}Fn();const t=co(n);t.id=Mi("part"),t.groupId=void 0,t.locked=!1,t.origin="user";const e=un(n);t.rotation=uo({x:e.x,y:-e.y,z:-e.z});const i=fo([n]);t.position={...t.position,x:n.position.x+Math.max(2,i.maxX-i.minX+2)};const s=Dt();s.detached=!0,s.parts.push(t),Ae([t.id]),re(),Ie(!1),Cn(),Be.redraw(),ke(),on()}function Vu(){if(Ee.length<2){Fe("סמנו בחירה מרובה, ואז לפחות שני חלקים.");return}Fn();const n=Mi("grp"),t=Dt();t.detached=!0;for(const e of t.parts)Ee.includes(e.id)&&(e.groupId=n);re(),Fe("הקבוצה זזה יחד. הסיבוב נשאר של כל חלק."),Ie(!1),ke(),on()}function Gu(){const n=Dt(),t=new Set(Ee),e=new Set(n.parts.filter(i=>t.has(i.id)&&i.groupId).map(i=>i.groupId));if(e.size===0){Fe("אין קבוצה לפירוק.");return}Fn();for(const i of n.parts)i.groupId&&(t.has(i.id)||e.has(i.groupId))&&delete i.groupId;re(),Ie(!1),ke(),on()}function Wu(){if(!Ee.length){Fe("בחרו חלק לנעילה.");return}Fn();const n=new Set(Ee),t=Dt(),e=t.parts.filter(i=>n.has(i.id)).some(i=>!i.locked);for(const i of t.parts)n.has(i.id)&&(i.locked=e);re(),Ie(!1),Be.redraw(),ke(),on()}function Yn(n,t,e,i){return`<label>${t}<input class="num" data-axis="${n}" type="number" step="0.1" value="${Kt(e)}" ${i?"disabled":""} /></label>`}function Yv(n,t){const e=vs(t),i=un(t),s={x:e.x,y:e.y,z:e.z,sx:t.size.x,sy:t.size.y,sz:t.size.z,rx:i.x,ry:i.y,rz:i.z};for(const[r,o]of Object.entries(s)){const a=n.querySelector(`[data-axis="${r}"]`);!a||document.activeElement===a||(a.value=Kt(o))}}function on(){const n=document.querySelector("#gizmo-fields");if(!n)return;const t=Ao()??null;document.querySelectorAll("#gizmo-dock [data-gizmo]").forEach(a=>{a.classList.toggle("on",a.dataset.gizmo===Ts)});const e=document.querySelector('#gizmo-dock [data-action="lock"]');e&&(e.textContent=t?.locked?"פתיחה":"נעילה");const i=t?`${t.id}:${t.locked?1:0}`:"none";if(n.dataset.key===i&&t){Yv(n,t);return}if(n.dataset.key=i,!t){n.innerHTML='<p class="hint">בחרו חלק בתלת־ממד, או הוסיפו לוח, קורה, צינור, פס או זווית.</p>';return}const s=vs(t),r=un(t),o=!!t.locked;n.innerHTML=`
    <p class="dock-title">${qu(t.name)}</p>
    <p class="hint">מיקום (מרכז)</p>
    <div class="triple">${Yn("x","X",s.x,o)}${Yn("y","Y",s.y,o)}${Yn("z","Z",s.z,o)}</div>
    <p class="hint">מידה</p>
    <div class="triple">${Yn("sx","אורך",t.size.x,o)}${Yn("sy","גובה",t.size.y,o)}${Yn("sz","עומק",t.size.z,o)}</div>
    <p class="hint">סיבוב במעלות</p>
    <div class="triple">${Yn("rx","X°",r.x,o)}${Yn("ry","Y°",r.y,o)}${Yn("rz","Z°",r.z,o)}</div>`}function Xu(){const n=Dt();Av.innerHTML=`${$d(n,It,Is.capture())}
    <div class="report-actions">
      <button type="button" data-report="back">חזרה לעריכה</button>
      <button type="button" data-report="print">הדפסה / PDF</button>
    </div>`,document.body.classList.add("preview-report")}function rn(){ke(),Cn(),Ie(sn),sn=!1,Be.redraw(),on()}function ke(){document.body.dataset.tab=xs,document.querySelectorAll(".tabbar button").forEach(e=>{const i=e.dataset.tab===xs;e.classList.toggle("on",i),e.setAttribute("aria-pressed",i?"true":"false")}),Object.keys(Je).forEach(e=>{Je[e].hidden=e!==xs});const n=document.activeElement,t=Dt();(!n||!Je.template.contains(n))&&(Je.template.innerHTML=Zd(t,It,Ee)),(!n||!Je.draw.contains(n))&&(Je.draw.innerHTML=Jd(t,It)),(!n||!Je.bom.contains(n))&&(Je.bom.innerHTML=Qd(t,It)),(!n||!Je.files.contains(n))&&(Je.files.innerHTML=ef(ve,t.id,It,yi)),Je.files.querySelector('[data-action="open-project"]'),qv()}function qv(){const n=Je.template.querySelector(".pane-block");if(!n||n.querySelector("[data-name]"))return;const t=document.createElement("label");t.innerHTML='שם הפרויקט <input data-name value="" />';const e=t.querySelector("input");e.value=Dt().name,e.addEventListener("input",()=>{Dt().name=e.value||"ללא שם",Dt().nameCustom=!0,re(),$u()}),n.insertBefore(t,n.firstChild)}function Cn(){$u();const n=Dt(),t=po(n,It);wv.textContent=`${Kt(t.bounds.length)} × ${Kt(t.bounds.depth)} × ${Kt(t.bounds.height)} ס"מ · ${Dn(t.totalWeightKg)}`,Tv.hidden=!n.detached}function $u(){const n=Dt().id;lo.innerHTML=ve.map(t=>`<option value="${t.id}">${qu(t.name)}</option>`).join(""),lo.value=n}function Ie(n){Is.update(Dt().parts,It,Nu/100,hr,n)}function re(){Dt().updatedAt=Date.now(),Yu()}function Yu(){window.clearTimeout(wh),wh=window.setTimeout(()=>{const n=Ev(ve,It,Dt().id);n&&Fe(n)},180)}function Fe(n){qr.textContent=n,qr.hidden=!1,window.setTimeout(()=>{qr.textContent===n&&(qr.hidden=!0)},3200)}function qu(n){return n.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]??t)}function Zv(){if(!("serviceWorker"in navigator))return;const n=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("message",t=>{const e=t.data;n&&e?.type==="SW_ACTIVATED"&&jv(e.version||mo)}),navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).catch(()=>{})}function jv(n){xa.hidden=!1;const t=xa.querySelector("b");t&&(t.textContent=n),xa.querySelector("button")?.addEventListener("click",()=>window.location.reload(),{once:!0})}
