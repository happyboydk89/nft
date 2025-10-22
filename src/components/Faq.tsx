'use client';

import { useState, useRef, useId } from 'react';

type QA = { q: string; a: string };

const qaList: QA[] = [
	{
		q: 'タイトルテキストが入ります。',
		a: '詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。',
	},
	{
		q: 'タイトルテキストが入ります。',
		a: '詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。',
	},
	{
		q: 'タイトルテキストが入ります。',
		a: '詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。',
	},
	{
		q: 'タイトルテキストが入ります。',
		a: '詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。',
	},
	{
		q: 'タイトルテキストが入ります。',
		a: '詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。',
	},
	{
		q: 'タイトルテキストが入ります。',
		a: '詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。',
	},
];

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="faq">
			<div className="container">
				<h3 className="en">FAQ</h3>
				<div className="faq-list">
					{qaList.map((item, idx) => (
						<AccordionItem key={idx} idPrefix={`faq-${idx}`} index={idx} open={openIndex === idx} onToggle={() => setOpenIndex(openIndex === idx ? null : idx)} q={item.q} a={item.a} />
					))}
				</div>
			</div>
		</section>
	);
}

function AccordionItem({ idPrefix, index, open, onToggle, q, a }: { idPrefix: string; index: number; open: boolean; onToggle: () => void; q: string; a: string }) {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const contentId = useId();
	const buttonId = `${idPrefix}-btn`;

	const maxHeight = open && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px';

	return (
		<dl className="faq-item">
			<dt id={buttonId} aria-controls={contentId} aria-expanded={open} onClick={onToggle} className={open ? 'is-open' : ''}>
				{q}
			</dt>
			<dd id={contentId} role="region" aria-labelledby={buttonId} ref={contentRef} className="overflow-hidden">
				<div style={{ maxHeight, transition: 'max-height 300ms ease' }}>{a}</div>
			</dd>
		</dl>
	);
}
