"use client"

import * as Accordion from '@radix-ui/react-accordion';

const items = [{
    questions: 'how do i check...',
    answer: ' you go to page....'
},{
    questions: 'how do i check...',
    answer: ' you go to page....'
},{
    questions: 'how do i check...',
    answer: ' you go to page....'
},{
    questions: 'how do i check...',
    answer: ' you go to page....'
}];

export function Faq(){
    return(
        <div className="flex w-full flex-col sm:flex-row py-[48px]">
            <div className="flex flex-col pr-[56px] gap-y-4 pb-3">
                <h3 className="text-xl font-bold text-pink-500">Frequntly aksed questions</h3>
                <h1 className="font-bold text-2xl">Let`s answer some of your questions</h1>
                <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel at fugiat libero est eligendi accusamus fuga earum provident vero deserunt molestias, ipsam impedit tempora totam incidunt assumenda voluptates, explicabo optio.</p>
            </div>
            
            <Accordion.Root type='single'
            defaultValue='item-1'
            collapsible
            className="flex flex-col gap-y-4">
                {items.map((item, index)=>(
                    <div key={index}>
                        <Accordion.Item value={`item-${index+1}`} className='bg-sky-300 rounded-md p-4'>
                            <Accordion.Header>
                                <Accordion.Trigger>
                                    <p>{item.questions}</p>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content>
                                <p>{item.answer}</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    </div>
                ))}
            </Accordion.Root>
    
            
        </div>
    )
}