Bursting with imagery, motion, interaction and distraction though it is, today’s World Wide Web is still primarily a conduit for textual information. In HTML5, the focus on writing and authorship is more pronounced than ever. It’s evident in the very way that new elements such as article and aside are named. HTML5 asks us to treat the HTML document more as… well, a document.

It’s not just the specifications that are changing, either. Much has been made of permutations to Google’s algorithms, which are beginning to favor better written, more authoritative content (and making work for the growing content strategy industry). Google’s bots are now charged with asking questions like, “Was the article edited well, or does it appear sloppy or hastily produced?” and “Does this article provide a complete or comprehensive description of the topic?,” the sorts of questions one might expect to be posed by an earnest college professor.

This increased support for quality writing, allied with the book-like convenience and tactility of smartphones and tablets, means there has never been a better time for reading online. The remaining task is to make the writing itself a joy to read.

As designers, we are frequently and incorrectly reminded that our job is to “make things pretty.” We are indeed designers — not artists — and there is no place for formalism in good design. Web design has a function, and that function is to communicate the message for which the Web page was conceived. The medium is not the message.

Never is this principle more pertinent than when dealing with type, the bread and butter of Web-borne communication. A well-set paragraph of text is not supposed to wow the reader; the wowing should be left to the idea or observation for which the paragraph is a vehicle. In fact, the perfect paragraph is unassuming to the point of near invisibility. That is not to say that the appearance of your text should have no appeal at all. On the contrary: well-balanced, comfortably read typography is a thing of beauty; it’s just not the arresting sort of beauty that might distract you from reading.

As a young industry that champions innovation and rates its practitioners based on their ability to apprehend (sorry, “grok”) the continual emergence of new technologies, frameworks, protocols and data models, we are not particularly familiar with tradition. However, the practice of arranging type for optimal pleasure and comfort is a centuries-old discipline. As long ago as 1927, the noted typographer Jan Tschichold spoke of the typesetting “methods and rules upon which it is impossible to improve” — a set of rules it would be foolish to ignore.

So, please put your canvas element and data visualization API to one side just for a short while. We are about to spend a little time brushing up on our typesetting skills. It’s called “hypertext,” after all.

Your choice of font is important, but the kind of “family” you choose is project-specific, and we won’t discuss it here except to make one point: the conventional wisdom among Web designers that only sans-serif fonts are suitable for body text is just a rule of thumb. Although serif fonts, with their greater complexity, may tend to be less effective at small sizes, there are many other factors to consider. A diminutive x-height, for example, could impair the readability of a font from either camp. Some serif fonts are highly legible and attractive for paragraph text if they are set properly. Matthew Carter’s screen-sympathetic Georgia is a case in point.

The first thing to consider when choosing a Web font (read: @font-face font) is the breadth of the family. Does the font include all of the necessary bold, italic (or even better, semi-bold and bold-italic) styles? One style is fine for headings, but paragraphs need greater variety. Without these variations at your disposal, not only will your text look insipid, but the lack of proper emphasis will make your writing difficult to follow.



With the full gamut of stylistic variations at your disposal, you will not have to rely on the unsatisfactory “faux” styles that are applied to a regular font when font-style: italic or font-weight: bold is called. Typefaces are not designed to be contorted in this way. Using the proper styles provided by a family like Bitstream (above) will make your typography not only more attractive but more accessible: dedicated italic glyphs have a much clearer intent than text that is simply “leaned over a bit.”

The trick is to make sure that the declaration of, for example, font-style: italic requests the italic resource rather than triggers the faux style. It should be as effortless as using a system font family such as Georgia. This is probably best explained, like so many things, in commented code. For brevity, we’ll set up just a regular font and an italic (not bold) style variation.

Our second typeface consideration relates to rendering. Some fonts, replete with beautiful glyphs and exceptional kerning as they may be, simply don’t render very well at small sizes. You will have noticed that embedded fonts are often reserved for headings, while system fonts (such as Verdana here) are relied on for body text.

One of the advantages of Verdana is that it is a “well-hinted” font. Delta hinting is the provision of information within a font that specifically enhances the way it renders at small sizes on screen. The smaller the font, the fewer the pixels that make up individual glyphs, requiring intelligent reconfiguration to keep the font legible. It’s an art that should be familiar to any Web designer who’s ever tried to make tiny icons comprehensible.

Hinting is a tricky and time-consuming process, and not many Web fonts are hinted comprehensively. Note the congealed upper portion of the bowl in the lowercase “b” in the otherwise impressive Crimson font, for instance. This small unfortunate glitch is distracting and slightly detracts from a comfortable reading experience. The effect is illustrated below and can be seen in context as a demo.

The good news is that, as font embedding becomes more commonplace, font designers are increasingly taking care of rendering and are supplying ever better hinting instructions. Typekit itself has even intervened by manually re-hinting popular fonts such as Museo. Your best bet is to view on-page demonstrations of the fonts you are considering, to see how well they turn out. Save time by avoiding, sight unseen, any fonts with the words “thin” or “narrow” in their names.

As a recent Smashing Magazine article compellingly attests, you put serious pressure on readability by venturing below a 16-pixel font size for paragraph text. All popular browsers render text at 16 pixels by default. This is a good enough indication (given the notorious tendency among browser makers to disagree) that 16 pixels is a clear standard. What’s more, the standard is given credence by an equivalent convention in print typography, as the article points out.

We often express 16px as 100% in the declaration block for the body in our CSS reset style sheets. This makes perfect sense, because it is like saying, “100% the same as the browser would have chosen for you.” If you want the paragraph text to be bigger than 16 pixels, just edit this value in the body block using a percentage value that equates to a “whole pixel.” Why whole pixels? Two reasons. First, whole numbers are less ungainly and are easier to use as multipliers in style sheets. Secondly, browsers tend to round “sub-pixel” values differently, giving inconsistent results. An 18-pixel font size expressed as a percentage is 112.5% (1.125 × 16).

Normalizing the size of default text (or “paragraph text,” if you’re being good and semantic) in such a way is extremely important because it sets us up to use ems as a multiplier for the size of surrounding headings and other textual elements. For instance, to render an h3 heading at 1.5 times the font size of the paragraph, we should give it the value of 1.5em. Because ems (pronounced as in “Emma,” not E.M. Forster) are relative units, they change according to the default font size. This makes it much easier to maintain style sheets and, more pertinently, ensures that the perceived importance of headings is not increased or diminished by adjusting the size of the paragraph text.

An illustration of optimal line length, or measure

The “measure” is the number of characters in a line of text. Choosing a comfortable measure is important for usability, because if lines are too long, then scanning back to find the start of the next line can be awkward. Without conscious effort, the reader might miss or reread lines. In The Elements of Typographic Style, Robert Bringhurst puts a good measure at somewhere between 45 and 75 characters. It is the main reason why we use the max-width property when designing elastic layouts.

Whatever your page’s ideal maximum width, it is likely much narrower than what you are used to seeing. According to an in-depth study of typographic design patterns published on Smashing Magazine, the average website exhibits a measure of 88.74 characters, far exceeding the optimal range.

Leading and Vertical Rhythm #



Daily update: **2024-09-18** 

