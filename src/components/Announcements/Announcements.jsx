import React from 'react';

export function Announcements({ events }) {
    return (
        <section>
            {events.map(element => (
                <h3>{element.frontmatter.title}</h3>
            ))}
        </section>
    );
}
