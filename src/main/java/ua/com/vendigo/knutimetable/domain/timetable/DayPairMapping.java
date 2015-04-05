package ua.com.vendigo.knutimetable.domain.timetable;

import ua.com.vendigo.knutimetable.domain.pair.Pair;

import javax.persistence.*;

/**
 * Created by Dmytro Marchenko on 25.01.2015.
 * Used for implements ManyToMany relations between {@link ua.com.vendigo.knutimetable.domain.timetable.Day} and {@link ua.com.vendigo.knutimetable.domain.pair.Pair}.
 */
@Entity
@Table(name = "day_pair_mapping")
public class DayPairMapping {
    @Id
    @GeneratedValue
    private Integer id;
    private int numberOfPair;
    private boolean oddWeek;
    @ManyToOne
    private Pair pair;

    public DayPairMapping() {
    }

    public DayPairMapping(int numberOfPair, boolean oddWeek, Pair pair) {
        this.numberOfPair = numberOfPair;
        this.oddWeek = oddWeek;
        this.pair = pair;
    }

    public Integer getId() {
        return id;
    }

    public int getNumberOfPair() {
        return numberOfPair;
    }

    public Pair getPair() {
        return pair;
    }

    public boolean isOddWeek() {
        return oddWeek;
    }
}
