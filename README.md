# Gilded Rose

==============

$coverage$

This is the Gilded Rose kata in JavaScript with Jest

![Gilded Rose](https://i.postimg.cc/QCjJ0gYw/HTB1-Wh-UUXLjs-K1-Rjy1-Xaq6zisp-Xa3-jpg-copy.jpg)

---

## How to install the program

- Clone this repository 
```
git clone https://github.com/amfibiya17/gilded-rose-tech-test
```

- Install dependencies
```
cd gilded-rose-tech-test
npm install
```

---

## How to run the program

```
node
```
---

## Test Coverage


---

## Input/output

Given item `name` with current quality `cQuality` and current sellIn `cSellIn`.  
When a day passes.  
Then item has revised quality `rQuality` and revised sellIn `rSellIn` .

Examples:

| name | cQuality | cSellIn | rQuality | rSellIn | action |
| ---- | -------- | ------- | -------- | ------- | ------ |
| Non-specific-item | 1 | 1 | 0 | 0 | quality decrease |
| Non-specific-item | 0 | 1 | 0 | 0 | never below 0 |
| Non-specific-item | 4 | 0 | 2 | -1 | twice as fast |
| --------------------- |
| Aged Brie | 4 | 1 | 5 | 0 | increases |
| Aged Brie | 4 | 0 | 6 | -1 | increases twice |
| Aged Brie | 4 | -1 | 6 | -2 | increases twice |
| Aged Brie | 49 | -1 | 50 | -2 | 50 limit |
| Aged Brie | 50 | -1 | 50 | -2 | 50 limit |
| --------------------- |
| Sulfuras, Hand of Ragnaros | 80 | 1 | 80 | 1 | never changes |
| --------------------- |
| Backstage passes to a TAFKAL80ETC concert | 1 | 11 | 2 | 10 | increase by 1 |
| Backstage passes to a TAFKAL80ETC concert | 1 | 10 | 3 | 9 | increase by 2 |
| Backstage passes to a TAFKAL80ETC concert | 1 | 6 | 3 | 5 | increase by 2 |
| Backstage passes to a TAFKAL80ETC concert | 1 | 5 | 4 | 4 | increase by 3 |
| Backstage passes to a TAFKAL80ETC concert | 1 | 0 | 0 | -1 | after concert |
| Backstage passes to a TAFKAL80ETC concert | 50 | 11 | 50 | 10 | 50 limit | 

---

## Steps approached

[x] Fix eslint  

[x] Create all possible tests to cover existing spaghetti code following input/output table above: tests for `Non-specific-item`, `Aged Brie`, `Backstage passes`, `Sulfuras Hand of Ragnaros` (coverage 100%). Writing the tests in this form helped me to better understand the requirements.   

[x] Separate classes `Item` and `Shop` and tests for them into different files  

[x] Create `AgedBrie` class following TDD 

[x] Create  `Sulfuras` class following TDD 

[] Create  `Backstage passes` class following TDD 

[] Refactor tests

---


## Specification (Provided)

Hi and welcome to team Gilded Rose.

As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date.

We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items.

First an introduction to our system:

- All items have a sell-in value which denotes the number of days we have to sell the item

- All items have a quality value which denotes how valuable the item is

- At the end of each day our system lowers both values for every item

- Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, quality degrades twice as fast

- The quality of an item is never negative

- "Aged Brie" actually increases in quality the older it gets

- The quality of an item is never more than 50

- "Sulfuras", being a legendary item, never has to be sold or decreases in quality

"Backstage passes", like aged brie, increases in quality as it's sell-in value approaches; quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

"Conjured" items degrade in quality twice as fast as normal items
Feel free to make any changes to the update-quality method and add any new code as long as everything still works correctly. However, do not alter the item function as that belongs to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership.

Just for clarification, an item can never have its quality increase above 50, however "Sulfuras" is a legendary item and as such its quality is 80 and it never alters.
