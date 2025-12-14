import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './RadarChart.css';

export function RadarChart({ results, size = 400, margin = 170 }) {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!results || results.length === 0) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();


        const radius = (size - margin * 2) / 2;
        const center = size / 2;

        // Create scales
        const angleScale = d3.scaleLinear()
            .domain([0, results.length])
            .range([0, Math.PI * 2]);

        const radiusScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, radius]);

        // Draw concentric circles (grid)
        const gridLevels = [20, 40, 60, 80, 100];
        gridLevels.forEach(level => {
            svg.append('circle')
                .attr('cx', center)
                .attr('cy', center)
                .attr('r', radiusScale(level))
                .attr('fill', 'none')
                .attr('stroke', '#e0e0e0')
                .attr('stroke-dasharray', '2,2');

            // Add level labels
            svg.append('text')
                .attr('x', center + 5)
                .attr('y', center - radiusScale(level))
                .attr('font-size', '10px')
                .attr('fill', '#999')
                .text(level);
        });

        // Draw axis lines
        results.forEach((_, i) => {
            const angle = angleScale(i) - Math.PI / 2;
            svg.append('line')
                .attr('x1', center)
                .attr('y1', center)
                .attr('x2', center + radius * Math.cos(angle))
                .attr('y2', center + radius * Math.sin(angle))
                .attr('stroke', '#e0e0e0');
        });

        // Draw labels
        results.forEach((result, i) => {
            const angle = angleScale(i) - Math.PI / 2;
            const labelRadius = radius + 20;
            const x = center + labelRadius * Math.cos(angle);
            const y = center + labelRadius * Math.sin(angle);

            // Adjust anchor based on position
            let anchor = 'middle';
            if (Math.abs(x - center) > 10) {
                anchor = x > center ? 'start' : 'end';
            }

            svg.append('text')
                .attr('x', x)
                .attr('y', y)
                .attr('text-anchor', anchor)
                .attr('dominant-baseline', 'middle')
                .attr('font-size', '12px')
                .attr('font-weight', '600')
                .attr('fill', '#333')
                .text(result.name);
        });

        // Calculate polygon points
        const points = results.map((result, i) => {
            const angle = angleScale(i) - Math.PI / 2;
            const r = radiusScale(result.score);
            return [
                center + r * Math.cos(angle),
                center + r * Math.sin(angle)
            ];
        });

        // Draw filled polygon
        svg.append('polygon')
            .attr('points', points.map(p => p.join(',')).join(' '))
            .attr('fill', 'rgba(0, 96, 57, 0.3)') // Deep Rolex Green with opacity
            .attr('stroke', '#006039')
            .attr('stroke-width', 2);

        // Draw points
        points.forEach((point, i) => {
            svg.append('circle')
                .attr('cx', point[0])
                .attr('cy', point[1])
                .attr('r', 4)
                .attr('fill', '#006039')
                .attr('stroke', 'white')
                .attr('stroke-width', 1);
        });

    }, [results, size]);

    return (
        <div className="radar-chart-container">
            <svg
                ref={svgRef}
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="radar-chart"
                role="img"
                aria-label="Radar chart showing values profile"
            />
        </div>
    );
}
