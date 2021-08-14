"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[851],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),s=["components"],i={slug:"testing-scenarios",title:"Testing using scenarios",sidebar_label:"Testing using scenarios"},l=void 0,u={unversionedId:"testing/testing-scenarios",id:"testing/testing-scenarios",isDocsHomePage:!1,title:"Testing using scenarios",description:"What is scenario-based testing?",source:"@site/docs/testing/testing-scenarios.md",sourceDirName:"testing",slug:"/testing/testing-scenarios",permalink:"/legal-tech-class/docs/testing/testing-scenarios",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/testing/testing-scenarios.md",version:"current",frontMatter:{slug:"testing-scenarios",title:"Testing using scenarios",sidebar_label:"Testing using scenarios"},sidebar:"someSidebar",previous:{title:"Testing",permalink:"/legal-tech-class/docs/testing/testing"},next:{title:"Lorem Ipsum",permalink:"/legal-tech-class/docs/testing/lorem-ipsum"}},c=[{value:"What is scenario-based testing?",id:"what-is-scenario-based-testing",children:[{value:"Benefits and tradeoffs",id:"benefits-and-tradeoffs",children:[]}]},{value:"Creating user scenarios",id:"creating-user-scenarios",children:[{value:"What features should be tested, and in which combinations?",id:"what-features-should-be-tested-and-in-which-combinations",children:[]}]},{value:"Developing a testing strategy",id:"developing-a-testing-strategy",children:[]},{value:"Running the tests",id:"running-the-tests",children:[]},{value:"Recording the results of your tests",id:"recording-the-results-of-your-tests",children:[{value:"Sample tester instructions",id:"sample-tester-instructions",children:[]}]},{value:"Review your tests and iterate",id:"review-your-tests-and-iterate",children:[]},{value:"Further reading",id:"further-reading",children:[]}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-scenario-based-testing"},"What is scenario-based testing?"),(0,r.kt)("p",null,"The goal of testing is to validate that software works, and works correctly. In\nscenario-based testing, we try to validate software by running through the\nfeatures or workflow of the software ",(0,r.kt)("strong",{parentName:"p"},"as if")," we were a real-world user of the\ntool."),(0,r.kt)("h3",{id:"benefits-and-tradeoffs"},"Benefits and tradeoffs"),(0,r.kt)("p",null,"The benefit of scenario-based testing is that if done correctly, you will\nquickly identify the most important issues in your software with a relatively\nsmall amount of work. The negative is that you will miss some bugs. On the other\nhand, identifying all bugs in software is both logically\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Halting_problem"},"impossible")," and an\ninappropriate tradeoff of resources for most projects."),(0,r.kt)("h2",{id:"creating-user-scenarios"},"Creating user scenarios"),(0,r.kt)("p",null,"There are 5 basic steps to scenario-based testing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Brainstorm the profiles of real users of your tool. Think about who they are\nand what goals they may have."),(0,r.kt)("li",{parentName:"ol"},"Ensure you generate profiles that will encounter multiple branches of your\ntool. For example: if your tool is for helping someone file for divorce, at\nleast one profile might be for a user with children, and one without."),(0,r.kt)("li",{parentName:"ol"},"Now, think broadly about any fact patterns that your user profiles may have.\nFact patterns are less about who the user is, and more about a temporary\nsituation they are in. For example: a user profile might be for a tenant who\nlives in public housing. A fact pattern might be that they owe rent or are\nbeing evicted for violating their lease."),(0,r.kt)("li",{parentName:"ol"},"Reason about the combination of your profiles and fact patterns, and\neliminate any that overlap. These become the scenarios that you will test.\nYou want to test most logical branches of your interview with the combination\nof users and fact patterns."),(0,r.kt)("li",{parentName:"ol"},"Write a brief narrative prompt for your tester that describes each scenario.")),(0,r.kt)("p",null,"For a typical short form, you should end up with 5-10 scenarios. A very long or\ncomplex form may end up with many more. Try to think about how and whether you\ncan isolate different sections of the tool to avoid an impossibly large\ncombinatorial explosion of scenarios. If your tool produces some combination of\n5 forms, for example, make sure to test your scenarios on each form, but not\nnecessarily each combination of possible forms, which would immediately increase\nyour scenarios by a factor of 25."),(0,r.kt)("h3",{id:"what-features-should-be-tested-and-in-which-combinations"},"What features should be tested, and in which combinations?"),(0,r.kt)("p",null,"The goal of scenario-based testing is to approximate real-world use cases."),(0,r.kt)("p",null,"Yet it's also important to provide good coverage of the features that your tool has\nand makes available, because a user may decide to make use of functionality that\nyou did not anticipate."),(0,r.kt)("p",null,"Make sure your testing scenarios cover:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Inputs that trigger a new branch of your form (showing or hiding a screen or\nfollow-up question)."),(0,r.kt)("li",{parentName:"ol"},"Inputs that trigger a new form."),(0,r.kt)("li",{parentName:"ol"},"Inputs that trigger computed values (as opposed to ones that are copied into\nthe form literally, without being transformed in any way)."),(0,r.kt)("li",{parentName:"ol"},"Inputs that trigger an addendum. These can generally all be tested at once."),(0,r.kt)("li",{parentName:"ol"},"Reason in advance about combinations of inputs that may interact. For\nexample: code that triggers an addendum is probably independent of code that\nshows or hides follow-up questions. You may be able to safely test all of the\naddenda at once.")),(0,r.kt)("p",null,"One way to do this might be to make a matrix. Only some of the overlapping\nfeatures will need to be tested in combination. Write down each field\nin the columns and rows of a table, and mark an x if you think that combination of\nrow and column needs a test."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Has 1 child"),(0,r.kt)("th",{parentName:"tr",align:null},"Has assets"),(0,r.kt)("th",{parentName:"tr",align:null},"Lives out of state"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Has 1 child"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Has assets"),(0,r.kt)("td",{parentName:"tr",align:null},"(dupe)"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"(not relevant)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lives out of state"),(0,r.kt)("td",{parentName:"tr",align:null},"(dupe)"),(0,r.kt)("td",{parentName:"tr",align:null},"(not relevant)"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))),(0,r.kt)("p",null,"This matrix produced 5 combinations that our user scenarios should\ntest. If this list is too long, we may be able to remove even more\ntests that are truly independent and don't need to be tested in\ncombination. We can also combine some features into a single testing\nscenario."),(0,r.kt)("h2",{id:"developing-a-testing-strategy"},"Developing a testing strategy"),(0,r.kt)("p",null,"You should now have between 5-10 scenarios to test. You should come up with at\nleast two independent testers who will each run each scenario, with a total of\n10-20 runs of your tests."),(0,r.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,r.kt)("p",null,"Your tester should now have a set of user scenarios as prompts for their\ntesting. The prompts will be narratives. For example, if the form is for an\neviction, the user scenario might be:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Terry Tenant lives in public housing. She is being evicted for non-payment of\nrent. Her landlord didn't send her a notice to quit. Her goal is to file an\nAnswer in her eviction case.")),(0,r.kt)("p",null,"The tester should look at the scenario as they navigate your tool, and answer\nall questions as best as they can to reflect the facts that the scenario\nprovides. They will enter random (but realistic) input as well as they can."),(0,r.kt)("p",null,"Because there will be multiple tests by different testers, the random input\nwill help catch more errors than a list of specific inputs for each field."),(0,r.kt)("h2",{id:"recording-the-results-of-your-tests"},"Recording the results of your tests"),(0,r.kt)("p",null,"As your tester navigates the tool, they should write down the answers that they\ngive on each screen. If they run into an issue, they should write down the issue\nthat they encounter."),(0,r.kt)("p",null,"It can help to provide your tester a spreadsheet to record their inputs. That\nwill help you reproduce the bugs and confirm that they are fixed. A narrative is\nfine as well. Perhaps your tester just opens a Word document and writes down\ntheir choices."),(0,r.kt)("p",null,"In some instances, a video recording may be useful. If your tester opens a Zoom\nmeeting session and shares their screen, they can record the testing session. If\nthey run into any bugs, the recording can be used to trace their steps."),(0,r.kt)("p",null,"You should also provide your tester with a place to record feedback. A Google\nForm is a good place to do that. Each page of the interview should have a unique\nID that is visible and will help record feedback and errors in the right place."),(0,r.kt)("h3",{id:"sample-tester-instructions"},"Sample tester instructions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Dear tester, thank you for agreeing to test my tool! Please read the list of\nuser-scenarios below. I would like you to run through the form following each\nscenario. Please either record your screen on Zoom as you navigate the form, or\nwrite down your inputs on each screen. Each screen has a unique ID shown in\nred after the words "Page ID". Use this to identify the screen. If you run\ninto a bug, try to explain what you did to trigger it, and copy and paste any\nerror text you ran into.\n\nYou can use this form [INSERT LINK] to tell me about the bugs you found.\nYou can use this spreadsheet [INSERT LINK] to record the tests that you ran.\n\nThe scenario does not cover all of the facts. I would like you to imagine that\nyou are the user described in the scenario, and enter any choices that make\nsense to you. Your exact choice is not important. What is most important is\nthat we get enough different choices from all of the testers to catch most of\nthe bugs.\n\nFor fields that allow a lot of text, you may want to use this \nLorem Ipsum generator to see how the text input is handled.\n\nhttps://suffolklitlab.org/legal-tech-class/docs/testing/lorem-ipsum\n\n')),(0,r.kt)("h2",{id:"review-your-tests-and-iterate"},"Review your tests and iterate"),(0,r.kt)("p",null,"Once you have finished a round of testing, look over the results and the\nvariety of inputs that were entered. You made an assumption about how well\nthe tests would cover the features of your tool."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How well did your tests cover the different logical branches of your tool?"),(0,r.kt)("li",{parentName:"ol"},"Did your tests encounter edge cases that you can safely eliminate,\nsimplifying the tool and reducing the scope for future tests? Sometimes the\nsafest feature is one that doesn't exist! If your functionality is very\nhard to test, you may consider a simpler substitute for the functionality."),(0,r.kt)("li",{parentName:"ol"},"Did you notice any pattern of errors that would lead you to redesign either\nyour tool or the testing scenarios?")),(0,r.kt)("p",null,"Fix any bugs and confirm them by re-running the test with the facts that the\ntester used."),(0,r.kt)("p",null,"Use the information you learned to decide if more tests need to be run, perhaps\nwith new scenarios."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"The links below describe some more details about what scenario-based testing is\nand how to use it."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Scenario_testing"},"Wikipedia")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/software-testing-scenario-testing/"},"Geeks for Geeks")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.guru99.com/test-scenario.html"},"Guru99"))))}d.isMDXComponent=!0}}]);