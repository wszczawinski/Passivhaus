import React from 'react';

export function Announcements({ events }) {
    return (
        <section>
            <h2>Wydarzenia</h2>
            {events.map(element => (
                <h3>{element.frontmatter.title}</h3>
            ))}
        </section>
    );
}
