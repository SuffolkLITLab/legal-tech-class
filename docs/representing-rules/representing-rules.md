---
slug: representing-rules
title: Representing Law as Code
sidebar_label: Representing Law as Code
---

How do we take legal rules, in all of their ambiguity, and turn them into computer code?
Computers are literal. As we used to say, "garbage-in, garbage out." When translating law
to code, we turning something liminal into 1s and 0s. Sometimes great ambiguity is hidden
in a comma or a word like "reasonable."

Talking to a subject matter expert to transform a rule into code can be tricky. Lawyers are
trained to apply law to facts. When turning a rule into code, we need to apply a law to
all possible sets of facts at once. This is an exercise that requires a different kind
of legal thinking.

When creating an expert system, it's easy to mix code that represents rules with code
that controls the formatting and display of the different screens or the final output.
This can lead to a hard to debug mess. Mistakes in translation might be hard to catch
without careful attention.

Both of these concerns--translating, and making our code that translates law understandable--
are at the forefront of the legal rule representation problem.

The area of computational research that explores this can be generally described as **Rules
as Code**.

## Limits to translation

## Case based reasoning

## External logic

Externalizing logical rules, so that they are no longer mixed with interview or template logic, can help reduce these problems. Various authors have made efforts to represent logical rules in a platform-independent way. Some authors have used Google Sheets to represent rules. In the case of HotDocs, such rules need to be compiled into code, but Docassemble can make direct use of those rules. Neota Logic also allows for external representations of logical rules.

Jason Morris has adapted the Legal Case Based Analogical Reasoning Tool to create applications with logic independent of a specific interview, reasoning by analogy to previous cases, and directly usable within a Docassemble interview.

From the business process world, the Decision Model and Notation (DMN) representation can express complex logical rules. Rules expressed as DMNs could be directly integrated into systems such as Docassemble, or compiled into code for other platforms. This is a promising avenue for improving interactive legal application quality and maintainability. Dimyadi et al. [7] report one successful effort along these lines.

Another interesting approach to specifying legal rules is to write them as functions or object-oriented classes with abstract interfaces. Rather than embody the logic inside an interview, then, the interview can just present the relevant variables as parameters to the function, and let the function tell you whether the rule applies or not. The code still must be written by a developer and reviewed by a subject matter expert. The main advantage is when the same legal rules are used in multiple interviews. This approach would also assist authors in developing unit tests to avoid regressions as an interview is amended over time.

## Making the implicit explicit

Proscriptively, in the planning and implementation phase, authors should use methods to inventory and codify the legal and business rules that the system will be implementing. Often the legal rules may derive from a body of case law and statutes, but subject matter experts should translate any rules that the system will follow into plain English, in a form analogous to a syllogism (IF A and B, then C) . Then it can be the author’s project to translate those rules into computer code. Methods of externally expressing the legal rules that can be directly used by the reasoning engine discussed above will cut down on translation errors to the extent that they can reviewed or authored by the SME more easily than traditional code can be. This is likely to be an iterative process. Business rules that are familiar to the subject matter expert through their daily practice may be unwritten or invisible, but become clear when the automated system is used.

The same care and attention must be given to the information that is not expressed in a rule, but is still delivered to the user, through help texts or materials produced for the user. Such texts should be written and reviewed completely by the SME, with editing for plain language and usability also subject to SME review. If alternate information is delivered to the end-user, rules should be written to clearly express in which circumstance a given set is delivered. This information can be referenced in comments. 

## Moving away from the flowchart

Visual representations of interview paths can be useful, but a flowchart representing an interview with hundreds of paths will often be harder to read than the code. Legal applications can be visualized as finite state automatons, but this representation may not be useful when it is too hard to translate from this state into working code or difficult for a subject matter expert to review.

## Explorations in rules as code

* [Decision Tables](https://en.wikipedia.org/wiki/Decision_table)
* [Oasis Legal XML](https://en.wikipedia.org/wiki/Legal_XML)
* [BPMN/DMN](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation)
* [Blawx](https://blawx.com)

## Further reading

* Rules as Code: https://www.lawpracticetoday.org/article/rules-code/ (https://perma.cc/NFS4-P7ZY)

## Contributors and acknowledgments

Excerpted in part from Marc Lauritsen and Quinten Steenhuis. 2019. Substantive Legal Software Quality: A Gathering Storm?. In
_Proceedings of the Seventeenth International Conference on Artificial Intelligence and Law (ICAIL '19)_. ACM, New
York, NY, USA, 52-62. DOI: https://doi.org/10.1145/3322640.3326706. Available online at http://www.capstonepractice.com/s/Substantive-Legal-Software-Quality-A-Gathering-Storm.pdf