CREATE TABLE `books`(
    `isbn` smallint NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(90) NOT NULL,
    `author` VARCHAR(90) NOT NULL,
    `publisher` VARCHAR(90) NOT NULL,
    `year` INT NOT NULL,
    PRIMARY KEY (`isbn`)
);

CREATE TABLE `clients`(
    `registration` smallint NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(90) NOT NULL,
    `telephone` VARCHAR(90) NOT NULL,
    PRIMARY KEY (`registration`)
);

